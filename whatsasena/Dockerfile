FROM fusuf/whatsasena:latest

RUN git clone https://github.com/cu31/DarkWhatsAsenaDuplicated /root/DarkWhatsAsenaDuplicated

WORKDIR /root/DarkWhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
