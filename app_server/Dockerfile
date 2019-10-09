#
# 1. Build the docker image: 
# >> docker build -t tag .
#
# 2. Run an instance of the image. Bind exposed port to 300 and run in detahced mode.
# >> docker run -p 3000:8080 -d tag
#
#


FROM fedora:28

WORKDIR /opt/server
COPY ./ ./

RUN dnf -y install nodejs 
RUN dnf clean all
RUN npm install nodemon -g
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
