# fullcycle_desafio2
Desafio 02

#Build e execução do projeto: 
> docker-compose up -d --build

#Acesso container node e banco:

Exec node:docker exec -it node bash
	> node index.js 
Exec banco: docker exec -it db bash
	mysql -uroot -p
	> select * from nodedb.people;


