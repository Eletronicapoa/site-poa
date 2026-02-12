#!/bin/bash

echo "Criando novas pastas..."
mkdir -p docs assets/img/brand assets/img/icons assets/img/members assets/img/books assets/img/labs css js tools

echo "Movendo documentação..."
mv "assets/docs/desenvolvimento.md" "docs/" 2>/dev/null
mv "assets/docs/ics por lab.txt" "docs/ics_por_lab.txt" 2>/dev/null
mv "assets/docs/readme" "docs/readme.md" 2>/dev/null
mv "assets/docs/Sem título-2025-05-19-1534.excalidraw" "docs/fluxograma-2025.excalidraw" 2>/dev/null

echo "Movendo marcas e logos..."
mv "assets/img/logo blue.png" "assets/img/brand/logo-blue.png" 2>/dev/null
mv "assets/img/logo blue.svg" "assets/img/brand/logo-blue.svg" 2>/dev/null
mv "assets/img/logo white.svg" "assets/img/brand/logo-white.svg" 2>/dev/null
mv "assets/img/Logotipo labpoa.svg" "assets/img/brand/logotipo-labpoa.svg" 2>/dev/null
mv "assets/img/Logotipo v2.svg" "assets/img/brand/logotipo-v2.svg" 2>/dev/null
mv "assets/img/ufc_logo.svg" "assets/img/brand/ufc-logo.svg" 2>/dev/null
mv "assets/img/Frame 1.svg" "assets/img/brand/favicon.svg" 2>/dev/null

echo "Movendo ícones..."
mv "assets/img/arrow-down.svg" "assets/img/icons/" 2>/dev/null

echo "Movendo e padronizando fotos de membros..."
# Padronizando tudo para .jpg minúsculo
mv "assets/img/ronaldo.jpg" "assets/img/members/ronaldo.jpg" 2>/dev/null
mv "assets/img/ronaldo.jpeg" "assets/img/members/ronaldo.jpg" 2>/dev/null
mv "assets/img/belmino.jpeg" "assets/img/members/belmino.jpg" 2>/dev/null
mv "assets/img/bruce.jpeg" "assets/img/members/bruce.jpg" 2>/dev/null
mv "assets/img/davi.jpeg" "assets/img/members/davi.jpg" 2>/dev/null
mv "assets/img/elizabeth.jpeg" "assets/img/members/elizabeth.jpg" 2>/dev/null
mv "assets/img/joao victor.jpeg" "assets/img/members/joao-victor.jpg" 2>/dev/null
mv "assets/img/karol (2).jpeg" "assets/img/members/karol.jpg" 2>/dev/null
mv "assets/img/lara (2).jpeg" "assets/img/members/lara.jpg" 2>/dev/null
mv "assets/img/josalia (2).jpeg" "assets/img/members/josalia.jpg" 2>/dev/null
mv "assets/img/maxwell.jpeg" "assets/img/members/maxwell.jpg" 2>/dev/null
mv "assets/img/tais.jpeg" "assets/img/members/tais.jpg" 2>/dev/null
mv "assets/img/thiago.jpeg" "assets/img/members/thiago.jpg" 2>/dev/null
mv "assets/img/iuri.jpg" "assets/img/members/" 2>/dev/null
mv "assets/img/jadson.jpeg" "assets/img/members/jadson.jpg" 2>/dev/null
mv "assets/img/jhony.jpeg" "assets/img/members/jhony.jpg" 2>/dev/null
mv "assets/img/tatiana.jpeg" "assets/img/members/tatiana.jpg" 2>/dev/null

echo "Movendo livros..."
mv "assets/img/Adsorção.png" "assets/img/books/adsorcao.png" 2>/dev/null
mv "assets/img/bioadsorventes-capa.jpg" "assets/img/books/" 2>/dev/null
mv "assets/img/Cromatografia.png" "assets/img/books/cromatografia.png" 2>/dev/null
mv "assets/img/POAs.png" "assets/img/books/poas.png" 2>/dev/null
mv "assets/img/Processos-eletroliticos.png" "assets/img/books/processos-eletroliticos.png" 2>/dev/null

echo "Movendo laboratórios e equipamentos..."
mv "assets/img/gc-bid.png" "assets/img/labs/" 2>/dev/null
mv "assets/img/gc-bid2.png" "assets/img/labs/" 2>/dev/null
mv "assets/img/gc-ms.png" "assets/img/labs/" 2>/dev/null
mv "assets/img/hplc-dad.png" "assets/img/labs/" 2>/dev/null
mv "assets/img/ics.png" "assets/img/labs/" 2>/dev/null
mv "assets/img/toc.png" "assets/img/labs/" 2>/dev/null
mv "assets/img/toc2.png" "assets/img/labs/" 2>/dev/null
mv "assets/img/lab_img.png" "assets/img/labs/lab-img.png" 2>/dev/null

echo "Renomeando pastas de código..."
mv styles/* css/ 2>/dev/null
mv scripts/* js/ 2>/dev/null
mv css/refactor.sh tools/ 2>/dev/null

echo "Limpando o lixo antigo..."
rm -rf assets/docs styles scripts
rm -f "assets/fonts/Montserrat,Outfit.zip" "assets/fonts/Montserrat.zip" "assets/fonts/Montserrat/OFL.txt" "assets/fonts/Montserrat/README.txt" "assets/fonts/Outfit/OFL.txt" "assets/fonts/Outfit/README.txt"
# Remove as imagens soltas antigas que não foram movidas (duplicatas, etc)
find assets/img -maxdepth 1 -type f -delete 2>/dev/null

echo "Reorganização concluída!"
