# typo- 

## ajouter une nouvelle famille de font

1 : vérifier si les dossiers des familles de fonts présents dans le dossier /webfontgenerator/output ont bien été déplacés dans le dossier /fonts

- si oui : 
    
    ./clean_output et ./clean_input

- si non : 

    ./move_output puis ./clean_output et ./clean_input


2 : déplacer les nouvelles familles de fonts dans le dossier /webfontgenerator/input en
respectant la hiérarchie suivante :

    webfontgenerator
	input
	    famille-1
		font-A.(otf/ttf)
		font-B.(otf/ttf)
		font-C.(otf/ttf)
	    famille-2
		font-A.(otf/ttf)
		font-B.(otf/ttf)
		font-C.(otf/ttf)
	    ...

Les noms des dossiers et des fichiers seront conservés pour la génération des fichiers
fonts et des feuilles de styles, seuls les fichiers .otf ou .ttf sont supportés.


3 : lancer le generator

    ./generator.bash

4 : déplacer les dossier de familles de font dans le dossier /fonts

    ./move_output
