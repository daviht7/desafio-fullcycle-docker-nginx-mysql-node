FROM mysql:8.2.0

CMD [ "--innodb-use-native-aio=0" ]

COPY setup.sql /docker-entrypoint-initdb.d/