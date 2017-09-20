# Pulls node image
FROM node:8.5.0

# Setup environment variables
ENV PATH $PATH:node_modules/.bin

# Get sudo and python privileges
RUN apt-get update -q && \
    apt-get -y install sudo && \
    apt-get install -qy --no-install-recommends python-dev autoconf automake libtool

# Install Java
ENV JAVA_HOME /usr/lib/jvm/jdk1.8.0_144
WORKDIR /usr/lib/jvm
RUN wget --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie;" http://download.oracle.com/otn-pub/java/jdk/8u144-b01/090f390dda5b47b9b721c7dfaa008135/jdk-8u144-linux-i586.tar.gz && \
  tar -xzf jdk-8u144-linux-i586.tar.gz && \
  export PATH=$PATH:$JAVA_HOME/bin && \
  chgrp -R users $JAVA_HOME && \
  chmod -R 0775 $JAVA_HOME && \
  rm jdk-8u144-linux-i586.tar.gz
WORKDIR /

ENV PATH $PATH:$JAVA_HOME/bin

# Install Android SDK
# Set correct environment variables.
ENV ANDROID_SDK_FILE android-sdk_r24.0.1-linux.tgz
ENV ANDROID_SDK_URL http://dl.google.com/android/$ANDROID_SDK_FILE

# Install 32bit support for Android SDK
RUN dpkg --add-architecture i386 && \
    apt-get update -q && \
    apt-get install -qy --no-install-recommends libstdc++6:i386 libgcc1:i386 zlib1g:i386 libncurses5:i386

# Install Android SDK
ENV ANDROID_HOME /usr/local/android-sdk-linux
RUN cd /usr/local && \
    wget $ANDROID_SDK_URL && \
    tar -xzf $ANDROID_SDK_FILE && \
    export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools && \
    chgrp -R users $ANDROID_HOME && \
    chmod -R 0775 $ANDROID_HOME && \
    rm $ANDROID_SDK_FILE

# Install android tools and system-image.

ENV PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools/23.0.1

RUN apt-get install expect -y --force-yes
COPY tools /opt/tools
RUN ["/opt/tools/android-accept-licenses.sh", "android update sdk --all --no-ui --filter platform-tools,android-23,build-tools-23.0.1,extra-android-support,extra-android-m2repository,sys-img-x86_64-android-23,extra-google-m2repository"]

RUN ln -s /usr/local/android-sdk-linux/platform-tools/adb /usr/local/sbin/adb

# Get yarn
RUN npm install -g yarn

# Get react native
RUN npm install -g react-native-cli

# Get watchman
#RUN git clone https://github.com/facebook/watchman.git && \
#  cd watchman && \
#  git checkout v4.7.0 && \
#  ./autogen.sh && \
#  ./configure && \
#  make && \
#  sudo make install

# Clean up when done.
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    npm cache verify

#android-udev-rules
RUN git clone https://github.com/M0Rf30/android-udev-rules.git && \
    cp android-udev-rules/51-android.rules /etc/udev/rules.d/ && \
    chmod a+r /etc/udev/rules.d/51-android.rules && \
    groupadd adbusers

# Expose the port
EXPOSE 8081

# Add user
ENV USERNAME dev

RUN adduser --disabled-password --gecos '' $USERNAME && \
    echo $USERNAME:$USERNAME | chpasswd && \
    echo "%sudo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    adduser $USERNAME sudo

# Tell gradle to store dependencies in a sub directory of the android project
# this persists the dependencies between builds
ENV GRADLE_USER_HOME /home/$USERNAME/app/android/gradle_deps

USER $USERNAME

# Set workdir
# You'll need to run this image with a volume mapped to /home/dev (i.e. -v $(pwd):/home/dev) or override this value
WORKDIR /home/$USERNAME/app/
