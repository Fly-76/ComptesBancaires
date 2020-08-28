# Projet AFPA - S08 : Application de gestion de comptes bancaires

## Objectif : 
Créer une application qui permet à l’utilisateur de créer et gérer ses comptes bancaires.

## Compétences mises en oeuvre : 
- Installer un serveur local de développement composé de PHP7, Apache2 et MySQL
- Structurer ses données à l’aide du format JSON
- Créer une arborescence HTML sur la base de données au format JSON
- Programmer en orienté objet
- Effectuer des requêtes de type GET vers des fichiers stockés sur serveur
- Utiliser des API

## Description : 
- Page d'accueil du site, l’utilisateur voit par défaut tous ses comptes bancaires
    - A son arrivée sur l’accueil un layer s’affiche par dessus l’ensemble de la page et lui rappelle les règles de sécurité essentielles sur un site internet. 
    - Les règles de sécurité sont stockées dans un fichier et récupérées par requête HTTP (AJAX).

- Une page de statistiques:
l’utilisateur accède à des informations bancaires (taux d’emprunt, cours de la bourse, etc… )
    - Informations récupérées depuis un fichier via requête HTTP
    - Présentation sous forme de tableau. 
    - Fichier au format JSON.

- Une page de blog
    - Affichages des articles récupérés depuis l’API suivante : https://ocjswebsrv.herokuapp.com/api/articles

- Une page création de nouveau compte bancaire
    - Un type de compte (courant, livretA, PEL etc...) 
    - Somme par défaut supérieure à 50 euros

- Pour chaque compte l’utilisateur peut cliquer sur un lien qui par la suite lui permettra de supprimer le compte
- Pour chaque compte, l’utilisateur peut, via un formulaire faire un dépôt d’argent
- Pour chaque compte, l’utilisateur peut, via un formulaire faire un retrait d’argent

- Une page virement:
à l’aide d’un formulaire, 
    - l’utilisateur peut réaliser un virement d’un compte à un autre. 
    - Il peut sélectionner le compte à débiter, indiquer un montant.
    - Sélectionner le compte à créditer. 
    - Il ne peut sélectionner que ses propres comptes.