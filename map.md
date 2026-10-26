# PROMPT — MedNest Pricing & Payment Landing Page

## Rôle
Agis comme un Senior Frontend Developer et UI/UX Designer spécialisé dans les plateformes SaaS médicales.

Crée une page web indépendante pour MedNest, un logiciel de gestion de cabinet médical en Tunisie. Cette page présente les abonnements, permet de comparer les offres et propose un parcours de souscription.

## 1. Objectif et contraintes

Créer une page frontend statique, responsive, rapide et prête à être hébergée gratuitement.

Technologies recommandées :
- HTML5
- CSS3
- JavaScript vanilla
- Aucun backend
- Aucune base de données
- Aucun framework obligatoire
- Aucun secret ou clé API dans le frontend

Le site doit fonctionner sur ordinateur, tablette et smartphone.

## 2. Identité visuelle

Utiliser le branding MedNest :
- Bleu médical profond : #12539A
- Turquoise : #11B8AA
- Fond : #F5F8FC
- Cartes blanches
- Texte principal : #172B45
- Police moderne : Inter ou une police système équivalente

Créer une interface premium, inspirant confiance, sécurité, simplicité et professionnalisme.

Prévoir le logo MedNest dans la navigation, le footer et la section principale. Utiliser un fichier local `assets/mednest-logo.png` si le logo est disponible, sinon prévoir un emplacement facilement remplaçable.

## 3. Navigation

Créer une barre de navigation comprenant :
- Logo MedNest
- Fonctionnalités
- Tarifs
- Sécurité
- FAQ
- Bouton « Choisir mon abonnement »

La navigation doit défiler vers les sections correspondantes.

## 4. Section Hero

Titre :
« Votre cabinet médical, organisé simplement. »

Sous-titre :
« Patients, rendez-vous, consultations et gestion quotidienne réunis dans une seule application pensée pour les cabinets médicaux. »

Boutons :
- « Découvrir les offres »
- « Voir la démonstration »

Ajouter un aperçu visuel du dashboard médical, avec des statistiques fictives et un agenda.

Afficher discrètement :
« Prototype de présentation — MedNest »

## 5. Fonctionnalités

Présenter six fonctionnalités sous forme de cartes avec icônes :
1. Gestion des patients
2. Agenda et rendez-vous
3. Consultations médicales
4. Ordonnances
5. Gestion des recettes
6. Assistant IA local — fonctionnalité future

Ne pas prétendre que les fonctionnalités non encore développées sont disponibles en production.

## 6. Tarifs

Créer trois cartes d'abonnement en TND.

### Essential — 29 TND/mois
- Gestion des patients
- Agenda et rendez-vous
- Rappels et suivi
- Journal des recettes de base

### Elite Copilot — 79 TND/mois
- Fonctionnalités Essential
- Concept d'assistance IA locale
- Recherche documentaire DPM/CNAM
- Assistance à la préparation des ordonnances

### Cabinet Complet — 99 TND/mois
- Accès combiné médecin et secrétaire
- Gestion centralisée du cabinet
- Support prioritaire envisagé
- Mises à jour selon les conditions de l'offre

Ces tarifs et fonctionnalités sont des propositions de présentation, à confirmer avant toute commercialisation.

Ajouter un bouton « Choisir cette offre » à chaque carte.

Mettre en évidence visuellement l'offre Elite Copilot.

Ne pas inventer de réduction, de témoignage client ou de certification.

## 7. Parcours de souscription

Au clic sur « Choisir cette offre », ouvrir une section ou une fenêtre de souscription affichant :
- Offre sélectionnée
- Prix mensuel
- Récapitulatif
- Nom du cabinet
- Adresse e-mail professionnelle
- Téléphone facultatif

Ajouter deux modes de démonstration :

### Mode DEMO
Afficher un formulaire de souscription fictif. Après validation, montrer un récapitulatif et un écran de confirmation indiquant clairement :
« Simulation réussie — aucun paiement réel n'a été effectué. »

Ne demander aucune donnée de carte bancaire dans ce mode.

### Mode PAIEMENT RÉEL — À ACTIVER PLUS TARD
Préparer une fonction clairement isolée permettant de rediriger vers une page de paiement hébergée par un prestataire compatible avec la Tunisie.

Ne pas inventer d'URL de paiement et ne pas simuler une confirmation réelle dans ce mode.

Tant qu'aucun prestataire n'est configuré, afficher :
« Le paiement en ligne sera bientôt disponible. »

## 8. Paiement et sécurité

Ne jamais collecter ni stocker les numéros de carte, CVV ou mots de passe.

Ne jamais intégrer de clé secrète dans JavaScript.

Ne jamais considérer une redirection ou une page de succès comme une preuve de paiement.

Pour une future intégration réelle, prévoir :
- Une page de paiement hébergée par le prestataire
- Une configuration sécurisée côté serveur pour créer les sessions de paiement
- Une vérification serveur de la transaction avant d'activer un abonnement
- Une gestion claire des paiements échoués et annulés

La version statique doit rester entièrement fonctionnelle en mode démonstration, même sans ces services.

## 9. FAQ

Ajouter des questions interactives :
- Qu'est-ce que MedNest ?
- À qui s'adresse le logiciel ?
- Quelle est la différence entre les offres ?
- Le paiement en ligne est-il disponible ?
- Mes données médicales sont-elles stockées en ligne ?
- L'assistant IA est-il déjà disponible ?

Répondre honnêtement : cette page est un prototype et ne constitue pas un service médical opérationnel.

## 10. Footer

Inclure :
- Logo MedNest
- Courte description
- Liens de navigation
- Contact à configurer
- Conditions générales à compléter avant commercialisation
- Politique de confidentialité à compléter avant collecte réelle de données
- Mention « © 2026 MedNest — Prototype de présentation »

Ne pas inventer d'adresse, de numéro de téléphone ou d'entreprise légale.

## 11. Exigences techniques

Créer une structure simple :

mednest-landing/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── mednest-logo.png
└── README.md

Le site doit :
- Être accessible depuis `index.html`
- Fonctionner sans backend
- Utiliser des interactions JavaScript locales
- Disposer d'une navigation responsive
- Avoir des animations légères
- Respecter les bonnes pratiques d'accessibilité
- Ne présenter aucune erreur JavaScript
- Ne contenir aucun bouton principal inactif
- Fonctionner après publication sur un hébergement statique

Si le logo n'est pas disponible, prévoir un remplacement simple sans bloquer le développement.

## 12. Hébergement

Préparer le projet pour un déploiement sur GitHub Pages ou Cloudflare Pages.

Fournir un README expliquant :
1. Comment ouvrir le site localement.
2. Comment tester le parcours de démonstration.
3. Comment publier le site.
4. Comment remplacer le logo.
5. Comment préparer une future intégration de paiement réel.

## 13. Livrable final

Ne fournis pas seulement un plan : crée réellement les fichiers.

À la fin, vérifie les interactions, la responsivité, les liens, les formulaires et l'absence d'erreurs.

La page doit être élégante, crédible, rapide, adaptée au marché tunisien et immédiatement présentable.

Priorité : design professionnel, clarté des abonnements, parcours de souscription fluide, honnêteté sur les fonctionnalités disponibles et hébergement simple.
