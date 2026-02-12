#!/bin/bash

echo "Atualizando referências nos arquivos HTML..."

for file in *.html; do
    # Atualizando pastas de scripts e styles
    sed -i 's|styles/|css/|g' "$file"
    sed -i 's|scripts/|js/|g' "$file"

    # Atualizando Favicon e Logos
    sed -i 's|assets/img/Frame 1.svg|assets/img/brand/favicon.svg|g' "$file"
    sed -i 's|assets/img/logo blue.png|assets/img/brand/logo-blue.png|g' "$file"
    sed -i 's|assets/img/logo blue.svg|assets/img/brand/logo-blue.svg|g' "$file"
    sed -i 's|assets/img/logo white.svg|assets/img/brand/logo-white.svg|g' "$file"
    sed -i 's|assets/img/Logotipo labpoa.svg|assets/img/brand/logotipo-labpoa.svg|g' "$file"
    sed -i 's|assets/img/Logotipo v2.svg|assets/img/brand/logotipo-v2.svg|g' "$file"
    sed -i 's|assets/img/ufc_logo.svg|assets/img/brand/ufc-logo.svg|g' "$file"

    # Atualizando Ícones
    sed -i 's|assets/img/arrow-down.svg|assets/img/icons/arrow-down.svg|g' "$file"

    # Atualizando Membros (lidando com as duplicatas de jpeg para jpg)
    sed -i 's|assets/img/ronaldo.jpeg|assets/img/members/ronaldo.jpg|g' "$file"
    sed -i 's|assets/img/ronaldo.jpg|assets/img/members/ronaldo.jpg|g' "$file"
    sed -i 's|assets/img/belmino.jpeg|assets/img/members/belmino.jpg|g' "$file"
    sed -i 's|assets/img/bruce.jpeg|assets/img/members/bruce.jpg|g' "$file"
    sed -i 's|assets/img/davi.jpeg|assets/img/members/davi.jpg|g' "$file"
    sed -i 's|assets/img/elizabeth.jpeg|assets/img/members/elizabeth.jpg|g' "$file"
    sed -i 's|assets/img/joao victor.jpeg|assets/img/members/joao-victor.jpg|g' "$file"
    sed -i 's|assets/img/karol (2).jpeg|assets/img/members/karol.jpg|g' "$file"
    sed -i 's|assets/img/lara (2).jpeg|assets/img/members/lara.jpg|g' "$file"
    sed -i 's|assets/img/josalia (2).jpeg|assets/img/members/josalia.jpg|g' "$file"
    sed -i 's|assets/img/maxwell.jpeg|assets/img/members/maxwell.jpg|g' "$file"
    sed -i 's|assets/img/tais.jpeg|assets/img/members/tais.jpg|g' "$file"
    sed -i 's|assets/img/thiago.jpeg|assets/img/members/thiago.jpg|g' "$file"
    sed -i 's|assets/img/iuri.jpg|assets/img/members/iuri.jpg|g' "$file"
    sed -i 's|assets/img/jadson.jpeg|assets/img/members/jadson.jpg|g' "$file"
    sed -i 's|assets/img/jhony.jpeg|assets/img/members/jhony.jpg|g' "$file"
    sed -i 's|assets/img/tatiana.jpeg|assets/img/members/tatiana.jpg|g' "$file"

    # Atualizando Livros
    sed -i 's|assets/img/Adsorção.png|assets/img/books/adsorcao.png|g' "$file"
    sed -i 's|assets/img/bioadsorventes-capa.jpg|assets/img/books/bioadsorventes-capa.jpg|g' "$file"
    sed -i 's|assets/img/Cromatografia.png|assets/img/books/cromatografia.png|g' "$file"
    sed -i 's|assets/img/POAs.png|assets/img/books/poas.png|g' "$file"
    sed -i 's|assets/img/Processos-eletroliticos.png|assets/img/books/processos-eletroliticos.png|g' "$file"

    # Atualizando Laboratórios e Equipamentos
    sed -i 's|assets/img/gc-bid.png|assets/img/labs/gc-bid.png|g' "$file"
    sed -i 's|assets/img/gc-bid2.png|assets/img/labs/gc-bid2.png|g' "$file"
    sed -i 's|assets/img/gc-ms.png|assets/img/labs/gc-ms.png|g' "$file"
    sed -i 's|assets/img/hplc-dad.png|assets/img/labs/hplc-dad.png|g' "$file"
    sed -i 's|assets/img/ics.png|assets/img/labs/ics.png|g' "$file"
    sed -i 's|assets/img/toc.png|assets/img/labs/toc.png|g' "$file"
    sed -i 's|assets/img/toc2.png|assets/img/labs/toc2.png|g' "$file"
    sed -i 's|assets/img/lab_img.png|assets/img/labs/lab-img.png|g' "$file"
done

echo "Todos os arquivos HTML foram atualizados com sucesso!"
