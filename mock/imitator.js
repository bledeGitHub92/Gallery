module.exports = function (imitator) {
    imitator.static('/assets/images', '../client/gallery/assets/images');
    imitator('/brief', [
        { path: './assets/images/bridge.jpg', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: './assets/images/pyramid.jpg', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: './assets/images/dam.jpg', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
    ]);
    imitator('/paths', [
        { url: '/', text: '首页' },
        {
            text: 'deep1',
            subs: [
                {
                    text: 'deep2-1',
                    subs: [
                        {
                            text: 'deep3-1',
                            subs: [
                                { url: '/f', text: 'deep4-1' },
                                { url: '/g', text: 'deep4-2' },
                                { url: '/h', text: 'deep4-3' },
                            ]
                        },
                        { url: '/d', text: 'deep3-2' },
                        { url: '/e', text: 'deep3-3' },
                    ]
                },
                { url: '/waterfall/belle', text: 'deep2-2' },
                { url: '/b', text: 'deep2-3' },
                { url: '/c', text: 'deep2-4' },
            ]
        }
    ]);
    imitator('/belle', [
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl01.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl02.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl03.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl04.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl05.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl06.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl07.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
        { path: '/assets/images/girl08.png', dt: '海岸礁岩 阳光沙滩', dd: '加州除了阳光还有什么', p: '太平洋上寒冷而潮湿的海洋空气弥漫在金门海峡以北的塔玛佩斯山州立公园的海岸红杉森林和高山草甸。在重重雾霭之下，公园的山峰若隐若现，这里的雾是马林县的自然象征。公园也是穆尔森林国家纪念碑的所在地，公园里的红杉林是海湾地区少有的红衫林之一。' },
        { path: '/assets/images/girl09.png', dt: '让传统文化成为习惯', dd: '“粽子香厨房 艾叶香满堂”', p: '端午节在中国人的心目中有着举足轻重的地位，可以说是大多数中国人从小过到大的节日。还记得小时候和妈妈一起包粽子的场景吗？当然，随着社会人文的进步，端午节也不只有粽子这一经典代表，还发展出更多的节日习俗——图片中的粽型香袋就是人们怀念端午节的新形式，创意感十足！' },
        { path: '/assets/images/girl10.png', dt: '童趣', dd: '那些年我们为之疯狂的游戏们', p: '如今不顾辛苦辛勤工作的你，从懵懂到逐渐成熟的你，是否还记得自己是个熊孩子时候的样子？就像图中这一张张明媚的笑脸一样，孩子们在泳池边嬉戏打闹，用小脚丫顽皮的溅起一朵朵水花，看他们笑的多么天真无邪。你的心中，是否还有着童年时候的那份明媚？' },
    ])
}