declare var filepicker: any;
export class FilePickerClass {
    public static returnImageUrl() {
        console.log('File str')
        return new Promise<any>((resolve, reject) => {
            filepicker.setKey("AYNFaFbwyT12uGIZxwNE5z");
            var options = {
                mimetypes: ['image/*'],
                maxSize: 5 * 1024 * 1024 * 1024,
                maxFiles: 5,
                container: 'modal',
                services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX', 'CONVERT'],
                conversions: ['crop', 'rotate', 'filter'],
            };
            filepicker.pickMultiple(
                options,
                (InkBlob: any) => {
                    console.log('Resolved')
                    resolve(InkBlob)
                })
        });
    }
}