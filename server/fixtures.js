if (Icons.find().count() === 0) {
    Icons.insert({
        indexId: '1',
        url: 'https://iaweb.infor.com/internal/ia-auto',
        title: 'Automotive',
        img: 'icons-colors/automotive.png'
    });

    Icons.insert({
        indexId: '2',
        url: 'https://iaweb.infor.com/internal/ia-ad',
        title: 'Aerospace and Defense',
        img: 'icons-colors/a&d.png'
    });

    Icons.insert({
        indexId: '3',
        url: 'https://iaweb.infor.com/internal/ia-chemicals',
        title: 'Chemicals',
        img: 'icons-colors/chemical.png'
    });

    Icons.insert({
        indexId: '4',
        url: 'https://iaweb.infor.com/internal/iachemicals_13.3',
        title: 'Chemicals 13.3',
        img: 'icons-colors/chemical.png'
    });
}