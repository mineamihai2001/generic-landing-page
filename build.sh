DEPLOYMENT=$1
SOURCE_PATH=./config/$1/*
DEST_PATH=./public

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

cp -r $SOURCE_PATH $DEST_PATH
npm run build
