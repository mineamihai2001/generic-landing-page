DEPLOYMENT=$1
SOURCE_PATH=./config/$1
DEST_PATH=./public
STYLES_PATH=./src/application/styles

if [ -f "$DEST_PATH/config.json" ]; then
    echo "Removing $DEST_PATH/config.json"
    rm $DEST_PATH/config.json
else 
    echo "File $DEST_PATH/config.json not present in public dir"
fi

if [ -d "$DEST_PATH/assets" ]; then
    echo "Removing $DEST_PATH/assets"
    rm -r $DEST_PATH/assets
else 
    echo "Directory $DEST_PATH/assets not present in public dir"
fi

if [ -f "$SOURCE_PATH/styles/colors.css" ]; then
    echo "Found custom color scheme"
    cp $SOURCE_PATH/styles/colors.css $STYLES_PATH/colors.css
else 
    echo "File $SOURCE_PATH/styles/colors.css not found, using default color scheme"
    cp ./config/main/styles/colors.css $STYLES_PATH/colors.css
fi

cp -r $SOURCE_PATH/* $DEST_PATH
npm run build
