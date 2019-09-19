FROM fedora:28

WORKDIR /opt/server
COPY ./ ./

RUN dnf -y install nodejs 
RUN dnf clean all
RUN npm install nodemon -g
RUN npm install

EXPOSE 8080