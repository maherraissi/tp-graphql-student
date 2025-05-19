<<<<<<< HEAD
# TP3 : NestJS + GraphQL + MySQL – Gestion d’un annuaire d’étudiants

## Objectif
Créer une API pour gérer un annuaire d’étudiants (ajouter, consulter, modifier, supprimer) en utilisant NestJS, GraphQL et MySQL.

## Services Web et Technologies Utilisés

*   **NestJS**: Framework Node.js progressif pour construire des applications côté serveur efficaces et évolutives.
*   **GraphQL**: Langage de requête pour les API et runtime pour exécuter ces requêtes sur vos données.
*   **MySQL**: Système de gestion de base de données relationnelle utilisé pour stocker les données des étudiants.
*   **TypeORM**: ORM pour interagir avec la base de données MySQL.
*   **@nestjs/graphql & @nestjs/apollo**: Intégration de GraphQL avec NestJS en utilisant Apollo Server.
*   **mysql2**: Client MySQL pour Node.js.

## Étapes de Mise en Place et Modifications Effectuées

Les étapes suivantes ont été suivies pour mettre en place et exécuter ce projet :

1.  **Initialisation du projet NestJS** :
    ```bash
    nest new tp-graphql-student
    cd tp-graphql-student
    ```
2.  **Installation des dépendances nécessaires** (GraphQL, Apollo, TypeORM, MySQL) :
    ```bash
    npm install @nestjs/graphql @nestjs/apollo graphql apollo-server-express @nestjs/typeorm typeorm mysql2
    ```
3.  **Configuration de la base de données MySQL** :
    *   Création de la base de données `tp_graphql_db`.
    *   Configuration de `TypeOrmModule.forRoot` dans `src/app.module.ts` avec les informations de connexion à la base de données MySQL et la spécification des entités.
4.  **Configuration de GraphQL** :
    *   Configuration de `GraphQLModule.forRoot` dans `src/app.module.ts` en spécifiant le driver (ApolloDriver), le fichier de schéma (`src/schema.gql`) et en activant le playground.
5.  **Génération des éléments pour l'entité Étudiant** :
    ```bash
    nest g module student
    nest g service student
    nest g resolver student
    ```
6.  **Création de l'entité `Student`** dans `src/student/student.entity.ts` en utilisant les décorateurs TypeORM (`@Entity`, `@PrimaryGeneratedColumn`, `@Column`) et GraphQL (`@ObjectType`, `@Field`).
7.  **Configuration du module `StudentModule`** dans `src/student/student.module.ts` pour importer `TypeOrmModule.forFeature` avec l'entité `Student` et déclarer le service et le resolver comme providers.
8.  **Implémentation du `StudentService`** dans `src/student/student.service.ts` pour gérer la logique métier (trouver, créer, mettre à jour, supprimer des étudiants) en utilisant le repository TypeORM.
9.  **Implémentation du `StudentResolver`** dans `src/student/student.resolver.ts` pour définir les queries (`students`, `student`) et mutations (`createStudent`, `updateStudent`, `removeStudent`) GraphQL et appeler les méthodes du service correspondant.

## Pour Exécuter le Projet

1.  Assurez-vous d'avoir MySQL installé et en cours d'exécution.
2.  Créez une base de données MySQL nommée `tp_graphql_db`.
3.  Assurez-vous que les informations de connexion à la base de données dans `src/app.module.ts` sont correctes (`username`, `password`, `host`, `port`, `database`).
4.  Lancez l'application :
    ```bash
    npm run start:dev
    ```
5.  Le playground GraphQL sera accessible à l'adresse `http://localhost:3000/graphql` pour tester vos queries et mutations.

Voilà le résumé du projet et des étapes pour le faire fonctionner ! 
=======
# Service Web SOAP de Conversion de Devises

## Description
Ce projet implémente un service web SOAP simple utilisant Spring Boot pour convertir des montants d'une devise à une autre. Il sert d'exemple pour la création de services web basés sur SOAP avec Spring Web Services.

## Technologies Utilisées
*   Spring Boot
*   Spring Web Services
*   Apache Maven
*   JAXB (Java Architecture for XML Binding)
*   Java 17

## Structure du Projet
La structure principale du projet est la suivante :
```
currency-converter-service
│
├───src
│ ├───main
│ │ ├───java
│ │ │ └───com
│ │ │ └───example
│ │ │ └───currency
│ │ │ ├───endpoint
│ │ │ │ └───CurrencyConverterEndpoint.java
│ │ │ ├───config
│ │ │ │ └───WebServiceConfig.java
│ │ │ └───CurrencyConverterServiceApplication.java
│ │ └───resources
│ │ ├───currency-converter.xsd
│ │ └───application.properties
│ └───test
│ └───java
│ └───com
│ └───example
│ └───currency
│ └───CurrencyConverterServiceApplicationTests.java
├───pom.xml
└───README.md
```

## Services Web Utilisés
Ce projet implémente un service web SOAP unique basé sur la définition du schéma XML (`currency-converter.xsd`).

*   **Endpoint SOAP :** `/ws`
*   **Fichier WSDL :** `/ws/currencyConverter.wsdl` (accessible lorsque l'application est en cours d'exécution)

Le service exposé est `ConvertCurrency`, qui prend en entrée un montant, une devise de départ et une devise cible, et retourne le montant converti.

## Prérequis
Assurez-vous d'avoir les éléments suivants installés :
*   Java Development Kit (JDK) version 17 ou supérieure
*   Apache Maven

## Comment Construire et Exécuter le Projet

1.  Naviguez vers le répertoire du projet `currency-converter-service` dans votre terminal.
2.  Exécutez la commande Maven suivante pour générer les classes Java à partir du schéma XSD et construire le projet :
    ```bash
    mvn clean install
    ```
3.  Exécutez l'application Spring Boot en utilisant la commande Maven :
    ```bash
    mvn spring-boot:run
    ```
    L'application démarrera généralement sur `http://localhost:8080`.

## Comment Tester le Service SOAP

Vous pouvez tester le service SOAP à l'aide d'outils comme SoapUI ou Postman.

*   **URL du WSDL :** `http://localhost:8080/ws/currencyConverter.wsdl`
*   **URL de l'Endpoint SOAP :** `http://localhost:8080/ws`

### Exemple de Requête SOAP
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cur="http://example.com/currency">
   <soapenv:Header/>
   <soapenv:Body>
      <cur:ConvertCurrencyRequest>
         <cur:fromCurrency>USD</cur:fromCurrency>
         <cur:toCurrency>EUR</cur:toCurrency>
         <cur:amount>100.00</cur:amount>
      </cur:ConvertCurrencyRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

### Exemple de Réponse SOAP
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Body>
      <ns2:ConvertCurrencyResponse xmlns:ns2="http://example.com/currency">
         <ns2:convertedAmount>90.0</ns2:convertedAmount>
      </ns2:ConvertCurrencyResponse>
   </soapenv:Body>
</soapenv:Envelope>
```

Pour utiliser SoapUI ou Postman, importez le WSDL `http://localhost:8080/ws/currencyConverter.wsdl` pour générer automatiquement des requêtes de test. Configurez ensuite le corps de la requête avec l'exemple ci-dessus et envoyez-la à l'URL de l'endpoint. 
>>>>>>> 57ccdfe607bba4f08696014b07e1ceceb42c57ba
=======
# tp-graphql-student
>>>>>>> 65192bf76850166e9f2e12317a6792304870b533
