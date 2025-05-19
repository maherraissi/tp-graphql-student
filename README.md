<<<<<<< HEAD
# TP3 : NestJS + GraphQL + MySQL – Gestion d’un annuaire d’étudiants

## Objectif
Créer une API pour gérer un annuaire d’étudiants (ajouter, consulter, modifier, supprimer) en utilisant NestJS, GraphQL et MySQL.

## Services Web et Technologies Utilisés en Détail

*   **NestJS**: Ce framework Node.js sert de fondation à l'application. Il suit les principes de l'architecture modulaire, permettant une organisation claire du code en modules, contrôleurs, services et dans ce cas, des résolveurs GraphQL.
*   **GraphQL**: Utilisé comme alternative à l'API REST. Il permet de définir un schéma de données fort et offre aux clients la possibilité de demander exactement les champs nécessaires, évitant ainsi le sur-transfert de données. L'API expose un seul point d'accès (`/graphql`).
*   **MySQL**: Le système de base de données relationnelle choisi pour persister les données des étudiants. Les informations (id, firstName, lastName, email, phone) sont stockées dans une table `student`.
*   **TypeORM**: Un ORM (Object-Relational Mapper) qui facilite l'interaction avec la base de données MySQL. Il permet de mapper les classes TypeScript (`Student` entity) aux tables de la base de données et fournit des méthodes pour effectuer des opérations CRUD (Create, Read, Update, Delete) sans écrire de SQL brut.
*   **@nestjs/graphql & @nestjs/apollo**: Ces paquets fournissent l'intégration officielle de GraphQL dans NestJS. `@nestjs/graphql` gère la couche GraphQL de base, tandis que `@nestjs/apollo` permet d'utiliser Apollo Server, un serveur GraphQL populaire, avec NestJS.
*   **mysql2**: C'est le pilote Node.js spécifique qui permet à TypeORM de communiquer avec la base de données MySQL.

## Étapes de Mise en Place et Modifications Effectuées en Détail

Les étapes suivantes ont été suivies pour mettre en place et exécuter ce projet, avec les modifications spécifiques apportées :

1.  **Initialisation du projet NestJS** :
    ```bash
    nest new tp-graphql-student
    cd tp-graphql-student
    ```
    *Aucune modification spécifique au code à cette étape, juste la création de la structure de base.*

2.  **Installation des dépendances nécessaires** (GraphQL, Apollo, TypeORM, MySQL) :
    ```bash
    npm install @nestjs/graphql @nestjs/apollo graphql apollo-server-express @nestjs/typeorm typeorm mysql2
    ```
    *Ajout des paquets qui fournissent les fonctionnalités de base pour GraphQL (@nestjs/graphql, graphql, apollo-server-express) et son intégration avec NestJS (@nestjs/apollo), ainsi que TypeORM (typeorm) et le pilote MySQL (mysql2) pour la gestion de la base de données.*

3.  **Configuration de la base de données MySQL** :
    *   Exécution de `CREATE DATABASE tp_graphql_db;` dans MySQL pour créer la base de données.
    *   **Modification de `src/app.module.ts`** : Ajout de `TypeOrmModule.forRoot({...})` dans les `imports`. La configuration inclut le `type: 'mysql'`, les informations de connexion (`host`, `port`, `username`, `password`, `database`), et `entities: [__dirname + '/**/*.entity{.ts,.js}']` pour que TypeORM découvre automatiquement les fichiers d'entité. `synchronize: true` est activé pour générer automatiquement le schéma de base de données basé sur les entités en mode développement.

4.  **Configuration de GraphQL** :
    *   **Modification de `src/app.module.ts`** : Ajout de `GraphQLModule.forRoot({...})` dans les `imports`. La configuration utilise `driver: ApolloDriver`, spécifie le chemin pour la génération automatique du schéma (`autoSchemaFile: join(process.cwd(), 'src/schema.gql')`), et active le `playground: true` pour une interface de test interactive.

5.  **Génération des éléments pour l'entité Étudiant** :
    ```bash
    nest g module student
    nest g service student
    nest g resolver student
    ```
    *Création de la structure de base pour le module `student`, incluant le dossier, le fichier module, le service et le resolver.*

6.  **Création de l’entité Étudiant** :
    *   **Création et modification de `src/student/student.entity.ts`** : Définition de la classe `Student` avec les propriétés `id`, `firstName`, `lastName`, `email`, et `phone`. Utilisation des décorateurs TypeORM (`@Entity()`, `@PrimaryGeneratedColumn()`, `@Column()`, `@Column({nullable:true})`) pour le mapping ORM, et des décorateurs GraphQL (`@ObjectType()`, `@Field()`, `@Field(type => Int)`, `@Field({nullable:true})`) pour définir la structure des types GraphQL.

7.  **Configuration du module `StudentModule`** :
    *   **Modification de `src/student/student.module.ts`** : Importation de `TypeOrmModule.forFeature([Student])` pour rendre le repository `Student` injectable. Déclaration de `StudentService` et `StudentResolver` dans le tableau `providers` pour qu'ils soient gérés par le système d'injection de dépendances de NestJS.

8.  **Service Étudiant** :
    *   **Modification de `src/student/student.service.ts`** : Implémentation des méthodes `findAll`, `findOne`, `create`, `update`, et `remove` pour gérer la logique métier. Le `StudentService` utilise `@InjectRepository(Student)` pour injecter une instance du repository TypeORM pour l'entité `Student` et effectue les opérations de base de données via les méthodes de ce repository (`.find()`, `.findOne()`, `.save()`, `.update()`, `.delete()`).

9.  **Resolver GraphQL** :
    *   **Modification de `src/student/student.resolver.ts`** : Définition des points d'entrée GraphQL. Utilisation du décorateur `@Resolver(of => Student)` pour lier ce resolver à l'entité `Student`. Définition des requêtes (`@Query`) `students` (pour tous les étudiants) et `student` (pour un étudiant par ID) et des mutations (`@Mutation`) `createStudent`, `updateStudent`, et `removeStudent`. Ces méthodes appellent les fonctions correspondantes du `StudentService` injecté pour réaliser les opérations de données.

## Pour Exécuter le Projet

1.  Assurez-vous d'avoir MySQL installé et en cours d'exécution.
2.  Créez une base de données MySQL nommée `tp_graphql_db` (si ce n'est pas déjà fait).
3.  Assurez-vous que les informations de connexion à la base de données dans `src/app.module.ts` sont correctes (`username`, `password`, `host`, `port`, `database`).
4.  Lancez l'application :
    ```bash
    npm run start:dev
    ```
5.  Le playground GraphQL sera accessible à l'adresse `http://localhost:3000/graphql` pour tester vos queries et mutations.

Ce README détaillé fournit plus de contexte sur le rôle de chaque technologie et les modifications spécifiques apportées aux fichiers pour suivre les étapes du TP.






>>>>>>> 65192bf76850166e9f2e12317a6792304870b533
