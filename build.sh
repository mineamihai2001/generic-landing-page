DEPLOYMENT=$1
SOURCE_PATH=./config/$1/*
DEST_PATH=./public

rm $DEST_PATH/config.json &&
rm -r $DEST_PATH/assets &&
cp -r $SOURCE_PATH $DEST_PATH &&
npm run build
