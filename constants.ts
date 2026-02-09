import { City } from './types';

export const CITIES: City[] = [
  // --- BULGARIA REGIONS (All 28 Oblasts) ---
  {
    id: 'sofia',
    name: 'Sofya (Sofia)',
    country: 'Bulgaria',
    population: '1.3 Milyon',
    shortDesc: 'Başkent ve ülkenin kültürel, ekonomik ve eğitim merkezi.',
    region: 'Güneybatı',
    details: { cuisine: 'Banitsa, Shopska, Rakia', climate: 'Kıtasal', places: ['Alexander Nevsky Katedrali', 'Vitosha Dağı', 'Boyana Kilisesi'], funFact: 'Avrupa\'nın en eski başkentlerinden biridir, tarihi M.Ö. 7000\'e dayanır.' }
  },
  {
    id: 'plovdiv',
    name: 'Filibe (Plovdiv)',
    country: 'Bulgaria',
    population: '670,000 (Bölge)',
    shortDesc: 'Yedi tepe üzerine kurulu, Avrupa\'nın en eski yaşayan şehri.',
    region: 'Güney',
    details: { cuisine: 'Mavrud Şarabı, Köfte', climate: 'Ilıman', places: ['Antik Roma Tiyatrosu', 'Kapana Sanat Bölgesi', 'Eski Şehir'], funFact: 'M.Ö. 4000\'den beri sürekli yaşamın olduğu, Roma ve Atina\'dan daha eski bir şehirdir.' }
  },
  {
    id: 'varna',
    name: 'Varna',
    country: 'Bulgaria',
    population: '470,000 (Bölge)',
    shortDesc: 'Bulgaristan\'ın deniz başkenti ve yaz turizminin kalbi.',
    region: 'Karadeniz',
    details: { cuisine: 'Deniz Mahsulleri, Midye', climate: 'Denizel', places: ['Deniz Parkı', 'Varna Katedrali', 'Altın Kumlar'], funFact: 'Dünyanın işlenmiş en eski altın hazinesi (Varna Nekropolü) burada bulunmuştur.' }
  },
  {
    id: 'burgas',
    name: 'Burgaz (Burgas)',
    country: 'Bulgaria',
    population: '410,000 (Bölge)',
    shortDesc: 'Limanlar, göller ve festivaller şehri.',
    region: 'Karadeniz',
    details: { cuisine: 'Balık Çorbası, Tsatsa', climate: 'Subtropikal', places: ['Deniz Bahçesi', 'Burgaz İskelesi', 'Poda Koruma Alanı'], funFact: 'Her yaz düzenlenen kum heykeller festivali ile ünlüdür.' }
  },
  {
    id: 'ruse',
    name: 'Rusçuk (Ruse)',
    country: 'Bulgaria',
    population: '220,000 (Bölge)',
    shortDesc: 'Tuna Nehri kıyısındaki zarif mimarisiyle "Küçük Viyana".',
    region: 'Kuzey',
    details: { cuisine: 'Tuna Balığı', climate: 'Karasal', places: ['Tuna Parkı', 'Özgürlük Meydanı', 'Dohodno Zdanie'], funFact: 'Bulgaristan\'ın ilk demiryolu hattı ve ilk modern matbaası burada kurulmuştur.' }
  },
  {
    id: 'starazagora',
    name: 'Eski Zağra (Stara Zagora)',
    country: 'Bulgaria',
    population: '320,000 (Bölge)',
    shortDesc: 'Ihlamur kokulu, düz caddeli, şairler ve ressamlar şehri.',
    region: 'Merkez',
    details: { cuisine: 'Trakya Yemekleri', climate: 'Ilıman', places: ['Antik Forum', 'Zagorka Bira Müzesi', 'Ayazmo Parkı'], funFact: 'Tarih boyunca 7 farklı isme sahip olmuştur ve 8000 yıllık bir geçmişi vardır.' }
  },
  {
    id: 'pleven',
    name: 'Plevne (Pleven)',
    country: 'Bulgaria',
    population: '250,000 (Bölge)',
    shortDesc: 'Tarihi Plevne Savunması ile bilinen kahraman şehir.',
    region: 'Kuzeybatı',
    details: { cuisine: 'Kuzey Bulgar Yemekleri', climate: 'Karasal', places: ['Plevne Panorama 1877', 'Kaylaka Parkı', 'St. George Mozolesi'], funFact: 'Osmanlı-Rus savaşının (93 Harbi) en kritik ve kanlı savunmasının yapıldığı yerdir.' }
  },
  {
    id: 'blagoevgrad',
    name: 'Yukarı Cuma (Blagoevgrad)',
    country: 'Bulgaria',
    population: '300,000 (Bölge)',
    shortDesc: 'İki üniversitesi olan, dağların eteğinde genç ve dinamik şehir.',
    region: 'Güneybatı',
    details: { cuisine: 'Bansko Kapama', climate: 'Dağlık', places: ['Rila Manastırı', 'Varosha Mahallesi', 'Bansko Kayak Merkezi'], funFact: 'Bölge, Balkanların en yüksek zirvesi Musala\'ya ev sahipliği yapar.' }
  },
  {
    id: 'velikotarnovo',
    name: 'Tırnova (Veliko Tarnovo)',
    country: 'Bulgaria',
    population: '240,000 (Bölge)',
    shortDesc: 'İkinci Bulgar İmparatorluğu\'nun tarihi başkenti ve çarlar şehri.',
    region: 'Kuzey',
    details: { cuisine: 'Güveç', climate: 'Karasal', places: ['Tsarevets Kalesi', 'Samovodska Çarşısı', 'Asen Anıtı'], funFact: 'Şehir, Yantra nehri menderesleri üzerine amfitiyatro şeklinde kurulmuştur.' }
  },
  {
    id: 'haskovo',
    name: 'Hasköy (Haskovo)',
    country: 'Bulgaria',
    population: '230,000 (Bölge)',
    shortDesc: 'Bin yıllık tarihi ve devasa Meryem Ana heykeli ile ünlü.',
    region: 'Güney',
    details: { cuisine: 'Trakya Şarabı', climate: 'Ilıman', places: ['Meryem Ana Anıtı', 'Aleksandrovo Trak Mezarı', 'Çan Kulesi'], funFact: 'Guinness Rekorlar Kitabı\'na giren dünyanın en uzun Meryem Ana heykeli buradadır.' }
  },
  {
    id: 'shumen',
    name: 'Şumnu (Shumen)',
    country: 'Bulgaria',
    population: '170,000 (Bölge)',
    shortDesc: 'Bulgar devletinin doğduğu topraklar ve anıtlar şehri.',
    region: 'Kuzeydoğu',
    details: { cuisine: 'Şumnu Birası', climate: 'Karasal', places: ['Shumen Kalesi', 'Madara Atlısı', 'Kurucular Anıtı'], funFact: 'UNESCO listesindeki Madara Atlısı kaya kabartması bu bölgededir.' }
  },
  {
    id: 'kardzhali',
    name: 'Kırcaali (Kardzhali)',
    country: 'Bulgaria',
    population: '150,000 (Bölge)',
    shortDesc: 'Rodop Dağları\'nın kalbi, Türk kültürünün yoğun olduğu bölge.',
    region: 'Güney',
    details: { cuisine: 'Çevirme, Baklava', climate: 'Dağlık', places: ['Perperikon Antik Kenti', 'Kırcaali Barajı', 'Taş Mantarlar'], funFact: 'Bölge, Orpheus\'un efsanevi doğum yeri olarak bilinir.' }
  },
  {
    id: 'dobrich',
    name: 'Hacıoğlu Pazarcık (Dobrich)',
    country: 'Bulgaria',
    population: '170,000 (Bölge)',
    shortDesc: 'Bulgaristan\'ın tahıl ambarı Dobruca\'nın merkezi.',
    region: 'Kuzeydoğu',
    details: { cuisine: 'Dobruca Pidesi', climate: 'Karasal', places: ['Eski Dobriç Etnografya Müzesi', 'Şehir Parkı'], funFact: 'Sarıyazma türküsüne konu olan bölge, uçsuz bucaksız ayçiçeği tarlalarıyla kaplıdır.' }
  },
  {
    id: 'sliven',
    name: 'İslimye (Sliven)',
    country: 'Bulgaria',
    population: '180,000 (Bölge)',
    shortDesc: 'Mavi Taşlar\'ın gölgesinde, yüz voyvodanın şehri.',
    region: 'Güneydoğu',
    details: { cuisine: 'Milinki', climate: 'Rüzgarlı', places: ['Mavi Taşlar Milli Parkı', 'Eski Hapishane Müzesi', 'Hacı Dimitar Anıtı'], funFact: 'Bulgaristan\'ın ilk tekstil fabrikası burada kurulmuştur.' }
  },
  {
    id: 'pazardzhik',
    name: 'Pazarcık (Pazardzhik)',
    country: 'Bulgaria',
    population: '250,000 (Bölge)',
    shortDesc: 'Meriç nehri kıyısında, verimli toprakların şehri.',
    region: 'Güney',
    details: { cuisine: 'Trakya Mutfağı', climate: 'Ilıman', places: ['Özgürlük Anıtı', 'Saat Kulesi', 'Stanislas Dospevski Galerisi'], funFact: 'Şehirdeki cami ve kiliseler mimari açıdan birbirine çok yakındır.' }
  },
  {
    id: 'vidin',
    name: 'Vidin',
    country: 'Bulgaria',
    population: '80,000 (Bölge)',
    shortDesc: 'Tuna Nehri\'nin en batı ucundaki tarihi kale şehri.',
    region: 'Kuzeybatı',
    details: { cuisine: 'Vidin Şarabı', climate: 'Karasal', places: ['Baba Vida Kalesi', 'Tuna Parkı', 'Osman Pazvantoğlu Camii'], funFact: 'Baba Vida, Bulgaristan\'ın en iyi korunmuş orta çağ kalesidir.' }
  },
  {
    id: 'montana',
    name: 'Montana',
    country: 'Bulgaria',
    population: '120,000 (Bölge)',
    shortDesc: 'Roma döneminden kalma, kuzeybatının sakin şehri.',
    region: 'Kuzeybatı',
    details: { cuisine: 'Dağ Yemekleri', climate: 'Karasal', places: ['Mihaylovgrad Tarih Müzesi', 'Kiprovtsi Halı Merkezi'], funFact: 'Adını Roma tanrıçası Diana\'dan alan antik Montanesium\'dan alır.' }
  },
  {
    id: 'vratsa',
    name: 'İvraca (Vratsa)',
    country: 'Bulgaria',
    population: '150,000 (Bölge)',
    shortDesc: 'Balkan Dağları\'nın sarp kayalıklarının altındaki doğa harikası.',
    region: 'Kuzeybatı',
    details: { cuisine: 'Vratsa Şarabı', climate: 'Dağlık', places: ['Ledenika Mağarası', 'Vratsa Balkanı', 'Botev Yolu'], funFact: 'Hristo Botev\'in şehit düştüğü Okolchitsa zirvesi buradadır.' }
  },
  {
    id: 'lovech',
    name: 'Lofça (Lovech)',
    country: 'Bulgaria',
    population: '120,000 (Bölge)',
    shortDesc: 'Osmet Nehri üzerindeki ünlü Kapalı Köprü\'nün şehri.',
    region: 'Kuzey',
    details: { cuisine: 'Lofça Köftesi', climate: 'Karasal', places: ['Kapalı Köprü', 'Hisar Kalesi', 'Varosha'], funFact: 'Balkanların tek üzeri kapalı köprüsü burada bulunur.' }
  },
  {
    id: 'gabrovo',
    name: 'Gabrovo',
    country: 'Bulgaria',
    population: '100,000 (Bölge)',
    shortDesc: 'Dünyanın mizah başkenti ve el sanatları merkezi.',
    region: 'Merkez',
    details: { cuisine: 'Gabrovo Pastası', climate: 'Dağlık', places: ['Etar Açıkhava Müzesi', 'Mizah ve Hiciv Evi'], funFact: 'Şehir halkının tutumlu olmasıyla ilgili sayısız fıkra üretilmiştir.' }
  },
  {
    id: 'targovishte',
    name: 'Eski Cuma (Targovishte)',
    country: 'Bulgaria',
    population: '110,000 (Bölge)',
    shortDesc: 'Ülkenin önemli şarap üretim merkezi ve ticaret noktası.',
    region: 'Kuzeydoğu',
    details: { cuisine: 'Beyaz Şarap', climate: 'Karasal', places: ['Misin Kalesi (Misionis)', 'Tarih Müzesi'], funFact: 'Misionis antik kenti, Kuzey Bulgaristan\'ın Perperikon\'u olarak anılır.' }
  },
  {
    id: 'razgrad',
    name: 'Razgrad',
    country: 'Bulgaria',
    population: '110,000 (Bölge)',
    shortDesc: 'Ludogorie ormanlarının başkenti ve futbol şehri.',
    region: 'Kuzeydoğu',
    details: { cuisine: 'Yoğurt', climate: 'Karasal', places: ['Abritus Antik Kenti', 'İbrahim Paşa Camii'], funFact: 'Balkanlar\'ın en büyük üçüncü camisi olan İbrahim Paşa Camii buradadır.' }
  },
  {
    id: 'silistra',
    name: 'Silistre (Silistra)',
    country: 'Bulgaria',
    population: '100,000 (Bölge)',
    shortDesc: 'Tuna\'nın Karadeniz\'e dökülmeden önceki son Bulgar limanı.',
    region: 'Kuzeydoğu',
    details: { cuisine: 'Kayısı', climate: 'Karasal', places: ['Mecidiye Tabyası', 'Tuna Bahçesi', 'Srebarna Doğa Koruma Alanı'], funFact: 'Osmanlı döneminde Tuna savunma hattının en önemli kalelerinden biriydi.' }
  },
  {
    id: 'smolyan',
    name: 'Paşmaklı (Smolyan)',
    country: 'Bulgaria',
    population: '100,000 (Bölge)',
    shortDesc: 'Rodopların kalbinde, kayak, göller ve yıldızlar diyarı.',
    region: 'Güney',
    details: { cuisine: 'Rodop Patatnik', climate: 'Dağlık', places: ['Pamporovo', 'Smolyan Gölleri', 'Planetaryum'], funFact: 'Bulgaristan\'ın en büyük planetaryumu ve gözlemevi buradadır.' }
  },
  {
    id: 'yambol',
    name: 'Yanbolu (Yambol)',
    country: 'Bulgaria',
    population: '110,000 (Bölge)',
    shortDesc: 'Tunca Nehri kıyısında, antik Kabyle kenti ve tarihi çarşı.',
    region: 'Güneydoğu',
    details: { cuisine: 'Kavurma', climate: 'Karasal', places: ['Kabyle Antik Kenti', 'Bezisten (Kapalı Çarşı)'], funFact: 'Avrupa\'nın Osmanlı döneminden kalma en iyi korunmuş bedestenlerinden biri buradadır.' }
  },
  {
    id: 'pernik',
    name: 'Pernik',
    country: 'Bulgaria',
    population: '120,000 (Bölge)',
    shortDesc: 'Madencilik tarihi ve korkunç maskelerin (Surva) şehri.',
    region: 'Batı',
    details: { cuisine: 'Izgara', climate: 'Karasal', places: ['Krakra Kalesi', 'Yeraltı Madencilik Müzesi'], funFact: 'Her yıl düzenlenen Uluslararası Surva Maske Festivali UNESCO listesindedir.' }
  },
  {
    id: 'kyustendil',
    name: 'Köstendil (Kyustendil)',
    country: 'Bulgaria',
    population: '110,000 (Bölge)',
    shortDesc: 'Kiraz bahçeleri ve şifalı kaplıcaları ile ünlü huzurlu şehir.',
    region: 'Batı',
    details: { cuisine: 'Kiraz, Elma', climate: 'Ilıman', places: ['Hisarlık Kalesi', 'Vladimir Dimitrov Sanat Galerisi', 'Roma Hamamları'], funFact: 'Roma döneminden beri "Pautalia" adıyla bilinen ünlü bir kaplıca merkezidir.' }
  },

  // --- TURKEY (ALL 81 PROVINCES) ---
  {
    id: 'adana',
    name: 'Adana',
    plateCode: '01',
    country: 'Turkey',
    population: '2.27 Milyon',
    shortDesc: 'Torosların güneyinde, sıcak insanı ve efsane lezzetleriyle Çukurova\'nın kalbi.',
    region: 'Akdeniz',
    details: { cuisine: 'Adana Kebap, Şalgam, Şırdan, Bici Bici', climate: 'Akdeniz', places: ['Taş Köprü', 'Sabancı Merkez Camii', 'Varda Köprüsü', 'Kapıkaya Kanyonu'], funFact: 'Adana\'da güneşe ateş eden insanlar efsanesi, sıcak yaz günlerinin değişmez şakasıdır.' }
  },
  {
    id: 'adiyaman',
    name: 'Adıyaman',
    plateCode: '02',
    country: 'Turkey',
    population: '632,000',
    shortDesc: 'Güneşin en güzel doğup battığı, medeniyetlerin tahtı Nemrut\'un şehri.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Çiğ Köfte, Adıyaman Tavası, Hıtap', climate: 'Karasal', places: ['Nemrut Dağı', 'Cendere Köprüsü', 'Perre Antik Kenti'], funFact: 'Dünyanın 8. harikası olarak anılan Nemrut Dağı heykelleri burada bulunur.' }
  },
  {
    id: 'afyonkarahisar',
    name: 'Afyonkarahisar',
    plateCode: '03',
    country: 'Turkey',
    population: '744,000',
    shortDesc: 'Termalin başkenti, mermerin ve sucuğun ana vatanı.',
    region: 'Ege',
    details: { cuisine: 'Afyon Sucuğu, Kaymak, Lokum, Bükme', climate: 'Karasal', places: ['Afyon Kalesi', 'Frig Vadisi', 'İscehisar Peribacaları'], funFact: 'Türkiye\'deki yolların kesişim noktasıdır ve mermer rezervleriyle dünyaca ünlüdür.' }
  },
  {
    id: 'agri',
    name: 'Ağrı',
    plateCode: '04',
    country: 'Turkey',
    population: '524,000',
    shortDesc: 'Türkiye\'nin çatısı, efsanelere konu olan yüce Ağrı Dağı\'nın evi.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Abdigör Köftesi, Haşıl', climate: 'Sert Karasal', places: ['İshak Paşa Sarayı', 'Ağrı Dağı', 'Meteor Çukuru'], funFact: 'İshak Paşa Sarayı, dünyanın ilk kalorifer sistemine sahip sarayıdır.' }
  },
  {
    id: 'amasya',
    name: 'Amasya',
    plateCode: '05',
    country: 'Turkey',
    population: '335,000',
    shortDesc: 'Yeşilırmak kıyısında, şehzadelerin yetiştiği açık hava müzesi.',
    region: 'Karadeniz',
    details: { cuisine: 'Amasya Elması, Keşkek, Baklalı Dolma', climate: 'Geçiş İklimi', places: ['Kral Kaya Mezarları', 'Yalıboyu Evleri', 'Amasya Kalesi'], funFact: 'Efsanevi aşıklar Ferhat ile Şirin\'in hikayesi bu topraklarda geçmiştir.' }
  },
  {
    id: 'ankara',
    name: 'Ankara',
    plateCode: '06',
    country: 'Turkey',
    population: '5.75 Milyon',
    shortDesc: 'Bozkırın ortasında yükselen Cumhuriyet\'in kalbi ve modern başkent.',
    region: 'İç Anadolu',
    details: { cuisine: 'Ankara Döneri, Ankara Tavası, Simit', climate: 'Karasal', places: ['Anıtkabir', 'TBMM', 'Atakule', 'Ankara Kalesi', 'Anadolu Medeniyetleri Müzesi'], funFact: 'Tiftik keçisi (Angora) ve Ankara kedisi dünyaca ünlüdür.' }
  },
  {
    id: 'antalya',
    name: 'Antalya',
    plateCode: '07',
    country: 'Turkey',
    population: '2.69 Milyon',
    shortDesc: 'Turkuaz denizi, antik kentleri ve güneşiyle Türk turizminin başkenti.',
    region: 'Akdeniz',
    details: { cuisine: 'Piyaz, Hibeş, Kabak Tatlısı', climate: 'Akdeniz', places: ['Kaleiçi', 'Düden Şelalesi', 'Aspendos', 'Olympos', 'Konyaaltı'], funFact: 'Dünyada en çok antik kente sahip bölgelerden biridir.' }
  },
  {
    id: 'artvin',
    name: 'Artvin',
    plateCode: '08',
    country: 'Turkey',
    population: '169,000',
    shortDesc: 'Bulutların üzerindeki yaylaları ve hırçın Çoruh Nehri ile doğa cenneti.',
    region: 'Karadeniz',
    details: { cuisine: 'Laz Böreği, Kuymak, Karalahana Sarması', climate: 'Karadeniz', places: ['Karagöl', 'Mençuna Şelalesi', 'Cam Teras', 'Macahel'], funFact: 'Geleneksel Kafkasör Boğa Güreşleri (boğalar zarar görmez) burada yapılır.' }
  },
  {
    id: 'aydin',
    name: 'Aydın',
    plateCode: '09',
    country: 'Turkey',
    population: '1.15 Milyon',
    shortDesc: 'Dağlarından yağ, ovalarından bal akan efeler diyarı.',
    region: 'Ege',
    details: { cuisine: 'İncir, Zeytinyağlılar, Çine Köftesi', climate: 'Akdeniz', places: ['Afrodisias', 'Didim (Apollon Tapınağı)', 'Kuşadası', 'Tralleis'], funFact: 'Antik çağın en önemli heykeltıraşlık okullarından biri Afrodisias\'taydı.' }
  },
  {
    id: 'balikesir',
    name: 'Balıkesir',
    plateCode: '10',
    country: 'Turkey',
    population: '1.25 Milyon',
    shortDesc: 'Hem Marmara\'ya hem Ege\'ye kıyısı olan, Türkiye\'yi doyuran il.',
    region: 'Marmara',
    details: { cuisine: 'Höşmerim, Susurluk Ayranı, Tirit', climate: 'Geçiş İklimi', places: ['Cunda Adası', 'Kaz Dağları', 'Manyas Kuş Cenneti', 'Avşa Adası'], funFact: 'Kaz Dağları (İda), mitolojideki ilk güzellik yarışmasının yapıldığı yerdir.' }
  },
  {
    id: 'bilecik',
    name: 'Bilecik',
    plateCode: '11',
    country: 'Turkey',
    population: '228,000',
    shortDesc: 'Taşı mermer, toprağı seramik, yaprağı ipek, kuruluşu Osmanlı olan şehir.',
    region: 'Marmara',
    details: { cuisine: 'Bıldırcın Kebabı, Nohutlu Mantı', climate: 'Geçiş İklimi', places: ['Şeyh Edebali Türbesi', 'Söğüt Ertuğrul Gazi Türbesi', 'Metristepe'], funFact: 'Osmanlı İmparatorluğu\'nun tohumlarının atıldığı Söğüt ilçesi buradadır.' }
  },
  {
    id: 'bingol',
    name: 'Bingöl',
    plateCode: '12',
    country: 'Turkey',
    population: '282,000',
    shortDesc: 'Yüzen adaları, soğuk suları ve balı ile meşhur doğa kenti.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Löl, Mastuva, Sorina Pel', climate: 'Karasal', places: ['Yüzen Adalar', 'Hesarek Kayak Merkezi', 'Çır Şelalesi'], funFact: 'Güneşin doğuşunun dünyada en güzel izlendiği yerlerden biri olduğu söylenir (Kala Tepesi).' }
  },
  {
    id: 'bitlis',
    name: 'Bitlis',
    plateCode: '13',
    country: 'Turkey',
    population: '353,000',
    shortDesc: 'Beş minaresi, Nemrut Krater Gölü ve Selçuklu mezarlarıyla tarih kokan şehir.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Büryan Kebabı, Bitlis Köftesi', climate: 'Karasal', places: ['Ahlat Selçuklu Mezarlığı', 'Nemrut Krater Gölü', 'İslahiye Medresesi'], funFact: 'Ahlat ilçesi, Türklerin Anadolu\'ya giriş kapısı ve "Kubbet-ül İslam" olarak anılır.' }
  },
  {
    id: 'bolu',
    name: 'Bolu',
    plateCode: '14',
    country: 'Turkey',
    population: '320,000',
    shortDesc: 'Yedigöller\'i, ormanları ve aşçılarıyla tabiatın kalbi.',
    region: 'Karadeniz',
    details: { cuisine: 'Bolu Çikolatası, Mengen Pilavı, Kaldırık Dolması', climate: 'Karadeniz', places: ['Abant Gölü', 'Yedigöller Milli Parkı', 'Gölcük', 'Kartalkaya'], funFact: 'Osmanlı saray mutfağının baş aşçıları yüzyıllardır Bolu Mengen\'den çıkar.' }
  },
  {
    id: 'burdur',
    name: 'Burdur',
    plateCode: '15',
    country: 'Turkey',
    population: '273,000',
    shortDesc: 'Göller Yöresi\'nin incisi, Türkiye\'nin Maldivleri Salda\'nın evi.',
    region: 'Akdeniz',
    details: { cuisine: 'Burdur Şiş, Ceviz Ezmesi', climate: 'Karasal', places: ['Salda Gölü', 'Sagalassos Antik Kenti', 'İnsuyu Mağarası'], funFact: 'Salda Gölü, jeolojik yapısıyla Mars yüzeyine en çok benzeyen yerlerden biridir.' }
  },
  {
    id: 'bursa',
    name: 'Bursa',
    plateCode: '16',
    country: 'Turkey',
    population: '3.19 Milyon',
    shortDesc: 'Ulu çınarları, termalleri ve tarihiyle Osmanlı\'nın ilk başkenti.',
    region: 'Marmara',
    details: { cuisine: 'İskender Kebap, Kestane Şekeri, Pideli Köfte', climate: 'Marmara', places: ['Ulu Camii', 'Uludağ', 'Cumalıkızık', 'Yeşil Türbe', 'Koza Han'], funFact: 'Hacivat ve Karagöz efsanesi bu şehirde doğmuştur.' }
  },
  {
    id: 'canakkale',
    name: 'Çanakkale',
    plateCode: '17',
    country: 'Turkey',
    population: '559,000',
    shortDesc: 'Bir devrin battığı, Türk milletinin yeniden doğduğu, Truva efsanesinin şehri.',
    region: 'Marmara',
    details: { cuisine: 'Peynir Helvası, Sardalya, Ezine Peyniri', climate: 'Geçiş İklimi', places: ['Şehitler Abidesi', 'Truva Antik Kenti', 'Assos', 'Aynalı Çarşı'], funFact: 'Tarihin en ünlü savaşı Truva ve Çanakkale Destanı bu topraklarda yaşanmıştır.' }
  },
  {
    id: 'cankiri',
    name: 'Çankırı',
    plateCode: '18',
    country: 'Turkey',
    population: '195,000',
    shortDesc: 'Yaran kültürünün yaşatıldığı, yer altı tuz şehri.',
    region: 'İç Anadolu',
    details: { cuisine: 'Yumurta Tatlısı, Sarımsaklı Et', climate: 'Karasal', places: ['Tuz Mağarası', 'Taş Mescit', 'Çankırı Kalesi'], funFact: 'Hititlerden beri işletilen Tuz Mağarası\'nda ölü bir eşek hiç bozulmadan korunmuştur.' }
  },
  {
    id: 'corum',
    name: 'Çorum',
    plateCode: '19',
    country: 'Turkey',
    population: '524,000',
    shortDesc: 'Hititlerin başkenti Hattuşa\'ya ev sahipliği yapan leblebi diyarı.',
    region: 'Karadeniz',
    details: { cuisine: 'Çorum Leblebisi, İskilip Dolması', climate: 'Karasal', places: ['Hattuşa (Boğazkale)', 'Çorum Saat Kulesi', 'Alacahöyük'], funFact: 'Tarihin bilinen ilk yazılı barış antlaşması (Kadeş) burada imzalanmıştır.' }
  },
  {
    id: 'denizli',
    name: 'Denizli',
    plateCode: '20',
    country: 'Turkey',
    population: '1.05 Milyon',
    shortDesc: 'Beyaz cennet Pamukkale ve horozuyla dünyaca ünlü.',
    region: 'Ege',
    details: { cuisine: 'Denizli Kebabı (Tandır), Zafer Gazozu', climate: 'Akdeniz', places: ['Pamukkale Travertenleri', 'Hierapolis', 'Laodikeia', 'Kaklık Mağarası'], funFact: 'Horozları o kadar uzun öter ki, bazen nefesleri yetmeyip bayılırlar.' }
  },
  {
    id: 'diyarbakir',
    name: 'Diyarbakır',
    plateCode: '21',
    country: 'Turkey',
    population: '1.80 Milyon',
    shortDesc: 'Kara bazalt surları, karpuzu ve kadim kültürüyle Mezopotamya\'nın incisi.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Ciğer Kebabı, Karpuz, Kaburga Dolması', climate: 'Sert Karasal', places: ['Diyarbakır Surları', 'Hevsel Bahçeleri', 'Ulu Camii', 'On Gözlü Köprü'], funFact: 'Diyarbakır Surları, Çin Seddi\'nden sonra dünyanın en uzun savunma duvarıdır.' }
  },
  {
    id: 'edirne',
    name: 'Edirne',
    plateCode: '22',
    country: 'Turkey',
    population: '414,000',
    shortDesc: 'Mimar Sinan\'ın ustalık eseri Selimiye\'nin taçlandırdığı serhat şehri.',
    region: 'Marmara',
    details: { cuisine: 'Tava Ciğer (Yaprak Ciğer), Badem Ezmesi', climate: 'Karasal', places: ['Selimiye Camii', 'Meriç Köprüsü', 'II. Bayezid Külliyesi'], funFact: 'Dünyada metrekare başına en çok tarihi eser düşen ikinci şehir olduğu söylenir (Floransa\'dan sonra).' }
  },
  {
    id: 'elazig',
    name: 'Elazığ',
    plateCode: '23',
    country: 'Turkey',
    population: '591,000',
    shortDesc: 'Gakkoşlar diyarı, Hazar Gölü ve Harput kalesiyle tarihin tanığı.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Orcik (Cevizli Sucuk), Harput Köfte, Peynirli Ekmek', climate: 'Karasal', places: ['Harput Kalesi', 'Hazar Gölü', 'Buzluk Mağarası'], funFact: 'Harput Kalesi\'nin harcına su yerine süt katıldığı rivayet edilir (Süt Kalesi).' }
  },
  {
    id: 'erzincan',
    name: 'Erzincan',
    plateCode: '24',
    country: 'Turkey',
    population: '239,000',
    shortDesc: 'Doğal güzellikleri, tulum peyniri ve bakır işlemeciliğiyle ünlü.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Erzincan Tulum Peyniri, Kesme Çorba', climate: 'Karasal', places: ['Girlevik Şelalesi', 'Ergan Dağı Kayak Merkezi', 'Mama Hatun Türbesi'], funFact: '1939 depreminden sonra şehir tamamen yeniden kurulmuştur.' }
  },
  {
    id: 'erzurum',
    name: 'Erzurum',
    plateCode: '25',
    country: 'Turkey',
    population: '749,000',
    shortDesc: 'Dadaşların şehri, karın ve kış turizminin başkenti.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Cağ Kebabı, Kadayıf Dolması, Ayran Aşı', climate: 'Sert Karasal', places: ['Palandöken', 'Çifte Minareli Medrese', 'Üç Kümbetler', 'Tortum Şelalesi'], funFact: 'Türkiye\'nin en soğuk ve en yüksek rakımlı büyükşehirlerinden biridir.' }
  },
  {
    id: 'eskisehir',
    name: 'Eskişehir',
    plateCode: '26',
    country: 'Turkey',
    population: '906,000',
    shortDesc: 'Porsuk çayı, parkları ve genç nüfusuyla Anadolu\'nun modern yüzü.',
    region: 'İç Anadolu',
    details: { cuisine: 'Çibörek, Met Helvası, Balaban Kebap', climate: 'Karasal', places: ['Odunpazarı Evleri', 'Porsuk Çayı', 'Sazova Parkı', 'Devrim Arabası Müzesi'], funFact: 'Dünyada lületaşının (beyaz altın) çıkarıldığı tek yerdir.' }
  },
  {
    id: 'gaziantep',
    name: 'Gaziantep',
    plateCode: '27',
    country: 'Turkey',
    population: '2.15 Milyon',
    shortDesc: 'Dünyanın lezzet başkenti, baklava ve fıstığın diyarı.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Baklava, Beyran, Katmer, Ali Nazik', climate: 'Karasal', places: ['Zeugma Mozaik Müzesi', 'Bakırcılar Çarşısı', 'Gaziantep Kalesi'], funFact: 'UNESCO Yaratıcı Şehirler Ağı\'na (Gastronomi) giren ilk Türk şehridir.' }
  },
  {
    id: 'giresun',
    name: 'Giresun',
    plateCode: '28',
    country: 'Turkey',
    population: '450,000',
    shortDesc: 'Fındığın başkenti, kirazın anavatanı ve yaylaların şehri.',
    region: 'Karadeniz',
    details: { cuisine: 'Fındık, Karalahana Çorbası, Görele Pidesi', climate: 'Karadeniz', places: ['Giresun Adası', 'Kümbet Yaylası', 'Mavi Göl'], funFact: 'Dünyaya kirazın (Kerasus) buradan yayıldığı bilinmektedir.' }
  },
  {
    id: 'gumushane',
    name: 'Gümüşhane',
    plateCode: '29',
    country: 'Turkey',
    population: '144,000',
    shortDesc: 'Altın kalpli insanların şehri, pestil ve köme diyarı.',
    region: 'Karadeniz',
    details: { cuisine: 'Pestil, Köme, Siron', climate: 'Karasal', places: ['Karaca Mağarası', 'Tomara Şelalesi', 'Santa Harabeleri'], funFact: 'Adını (Gümüş-hane) tarihi gümüş madenlerinden almıştır.' }
  },
  {
    id: 'hakkari',
    name: 'Hakkari',
    plateCode: '30',
    country: 'Turkey',
    population: '275,000',
    shortDesc: 'Sümbül Dağı\'nın gölgesinde, sarp dağların ve derin vadilerin kenti.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Doğaba, Keledoş', climate: 'Sert Karasal', places: ['Cilo Buzulları', 'Zap Suyu', 'Meydan Medresesi'], funFact: 'Türkiye\'nin en güney doğu ucunda, üç ülkenin sınırındadır.' }
  },
  {
    id: 'hatay',
    name: 'Hatay',
    plateCode: '31',
    country: 'Turkey',
    population: '1.68 Milyon',
    shortDesc: 'Medeniyetler korosu, hoşgörü kenti ve künefenin ana vatanı.',
    region: 'Akdeniz',
    details: { cuisine: 'Künefe, Tepsi Kebabı, Humus', climate: 'Akdeniz', places: ['Saint Pierre Kilisesi', 'Habib-i Neccar Camii', 'Titus Tüneli', 'Harbiye'], funFact: 'Dünyanın ilk mağara kilisesi (St. Pierre) buradadır ve "Hristiyan" kelimesi ilk kez burada kullanılmıştır.' }
  },
  {
    id: 'isparta',
    name: 'Isparta',
    plateCode: '32',
    country: 'Turkey',
    population: '445,000',
    shortDesc: 'Türkiye\'nin gül bahçesi ve lavanta diyarı.',
    region: 'Akdeniz',
    details: { cuisine: 'Gül Reçeli, Fırın Kebabı', climate: 'Karasal', places: ['Lavanta Bahçeleri (Kuyucak)', 'Eğirdir Gölü', 'Yazılı Kanyon'], funFact: 'Dünya gül yağı üretiminin %65\'ini tek başına karşılar.' }
  },
  {
    id: 'mersin',
    name: 'Mersin',
    plateCode: '33',
    country: 'Turkey',
    population: '1.91 Milyon',
    shortDesc: 'Akdeniz\'in incisi, liman kenti ve tantuni diyarı.',
    region: 'Akdeniz',
    details: { cuisine: 'Tantuni, Cezerye, Kerebiç', climate: 'Akdeniz', places: ['Kızkalesi', 'Cennet Cehennem Obrukları', 'Kanlıdivane', 'Yerköprü Şelalesi'], funFact: 'Kleopatra\'nın Tarsus\'ta (Mersin) Sezar ile buluştuğu kapı hala ayaktadır.' }
  },
  {
    id: 'istanbul',
    name: 'İstanbul',
    plateCode: '34',
    country: 'Turkey',
    population: '15.9 Milyon',
    shortDesc: 'İki kıtayı birleştiren, imparatorlukların başkenti ve dünyanın göz bebeği.',
    region: 'Marmara',
    details: { cuisine: 'Balık Ekmek, Sultanahmet Köftesi, Lüfer', climate: 'Geçiş İklimi', places: ['Ayasofya', 'Topkapı Sarayı', 'Boğaz', 'Galata Kulesi', 'Kapalıçarşı'], funFact: 'Napolyon "Dünya tek bir ülke olsaydı, başkenti İstanbul olurdu" demiştir.' }
  },
  {
    id: 'izmir',
    name: 'İzmir',
    plateCode: '35',
    country: 'Turkey',
    population: '4.46 Milyon',
    shortDesc: 'Ege\'nin incisi, özgür ruhlu insanların şehri.',
    region: 'Ege',
    details: { cuisine: 'Boyoz, Kumru, Söğüş, İzmir Köfte', climate: 'Akdeniz', places: ['Efes Antik Kenti', 'Saat Kulesi', 'Kordon', 'Kemeraltı', 'Çeşme'], funFact: 'İlyada ve Odysseia\'nın yazarı Homeros\'un İzmirli olduğu kabul edilir.' }
  },
  {
    id: 'kars',
    name: 'Kars',
    plateCode: '36',
    country: 'Turkey',
    population: '274,000',
    shortDesc: 'Doğu\'nun Paris\'i, kristal karın ve kaşarın başkenti.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Kars Kazı, Gravyer Peyniri, Hangel', climate: 'Sert Karasal', places: ['Ani Harabeleri', 'Sarıkamış Kayak Merkezi', 'Çıldır Gölü'], funFact: 'Şehir planı Rus işgali döneminde ızgara planlı olarak (birbirini dik kesen caddeler) yapılmıştır.' }
  },
  {
    id: 'kastamonu',
    name: 'Kastamonu',
    plateCode: '37',
    country: 'Turkey',
    population: '375,000',
    shortDesc: 'Evliyalar şehri, sarımsak diyarı ve ahşap mimarinin merkezi.',
    region: 'Karadeniz',
    details: { cuisine: 'Etli Ekmek, Banduma, Çekme Helva, Sarımsak', climate: 'Karadeniz', places: ['Ilgaz Dağı', 'Valla Kanyonu', 'Kastamonu Kalesi', 'Nasrullah Camii'], funFact: 'Kurtuluş Savaşı\'nda İnebolu üzerinden mühimmat taşıyarak en çok şehit veren ildir.' }
  },
  {
    id: 'kayseri',
    name: 'Kayseri',
    plateCode: '38',
    country: 'Turkey',
    population: '1.44 Milyon',
    shortDesc: 'Erciyes\'in gölgesinde, pastırma, sucuk ve mantının şehri.',
    region: 'İç Anadolu',
    details: { cuisine: 'Kayseri Mantısı, Pastırma, Sucuk, Yağlama', climate: 'Karasal', places: ['Erciyes Kayak Merkezi', 'Kayseri Kalesi', 'Kapuzbaşı Şelaleleri'], funFact: 'Mimar Sinan Kayserilidir ve ticari zekasıyla ünlü bir şehirdir.' }
  },
  {
    id: 'kirklareli',
    name: 'Kırklareli',
    plateCode: '39',
    country: 'Turkey',
    population: '369,000',
    shortDesc: 'Trakya\'nın saklı cenneti, longoz ormanlarının evi.',
    region: 'Marmara',
    details: { cuisine: 'Kırklareli Köftesi, Hardaliye', climate: 'Karasal', places: ['İğneada Longoz Ormanları', 'Dupnisa Mağarası', 'Kıyıköy'], funFact: 'Avrupa\'nın en büyük, dünyanın üçüncü büyük longoz ormanları buradadır.' }
  },
  {
    id: 'kirsehir',
    name: 'Kırşehir',
    plateCode: '40',
    country: 'Turkey',
    population: '247,000',
    shortDesc: 'Ahiliğin merkezi, bozkırın tezenesi Neşet Ertaş\'ın memleketi.',
    region: 'İç Anadolu',
    details: { cuisine: 'Ahi Pilavı, Kırşehir Köftesi', climate: 'Karasal', places: ['Cacabey Medresesi', 'Seyfe Gölü', 'Ahi Evran Türbesi'], funFact: 'Dünyanın ilk astronomi okullarından biri olan Cacabey Medresesi buradadır.' }
  },
  {
    id: 'kocaeli',
    name: 'Kocaeli',
    plateCode: '41',
    country: 'Turkey',
    population: '2.07 Milyon',
    shortDesc: 'Sanayinin başkenti, yeşil ve mavinin buluşma noktası.',
    region: 'Marmara',
    details: { cuisine: 'Pişmaniye, Mancarlı Pide', climate: 'Geçiş İklimi', places: ['Kartepe', 'Ormanya', 'Maşukiye', 'Osman Hamdi Bey Müzesi'], funFact: 'Avrupa\'nın en büyük doğal yaşam parkı Ormanya bu şehirdedir.' }
  },
  {
    id: 'konya',
    name: 'Konya',
    plateCode: '42',
    country: 'Turkey',
    population: '2.29 Milyon',
    shortDesc: 'Mevlana\'nın şehri, hoşgörü başkenti ve tahıl ambarı.',
    region: 'İç Anadolu',
    details: { cuisine: 'Etli Ekmek, Bamya Çorbası, Mevlana Şekeri', climate: 'Karasal', places: ['Mevlana Müzesi', 'Çatalhöyük', 'Tropikal Kelebek Bahçesi', 'Sille'], funFact: 'İnsanlık tarihinin ilk yerleşim yerlerinden biri olan Çatalhöyük buradadır.' }
  },
  {
    id: 'kutahya',
    name: 'Kütahya',
    plateCode: '43',
    country: 'Turkey',
    population: '578,000',
    shortDesc: 'Çininin başkenti ve termal sular diyarı.',
    region: 'Ege',
    details: { cuisine: 'Cimcik Aşı, Sini Mantısı', climate: 'Karasal', places: ['Aizanoi Antik Kenti', 'Kütahya Kalesi', 'Çini Müzesi'], funFact: 'Dünyanın ilk borsası Aizanoi\'de kurulmuştur.' }
  },
  {
    id: 'malatya',
    name: 'Malatya',
    plateCode: '44',
    country: 'Turkey',
    population: '812,000',
    shortDesc: 'Kayısının dünya başkenti, devlet adamları yetiştiren şehir.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Kayısı Tatlısı, Kağıt Kebabı, Analı Kızlı', climate: 'Karasal', places: ['Arslantepe Höyüğü', 'Levent Vadisi', 'Battalgazi'], funFact: 'Dünya kuru kayısı ihtiyacının %80\'ini tek başına karşılar.' }
  },
  {
    id: 'manisa',
    name: 'Manisa',
    plateCode: '45',
    country: 'Turkey',
    population: '1.46 Milyon',
    shortDesc: 'Şehzadeler şehri, Mesir Macunu ve Spil Dağı\'nın evi.',
    region: 'Ege',
    details: { cuisine: 'Manisa Kebabı, Mesir Macunu, Kula Güveci', climate: 'Akdeniz', places: ['Spil Dağı', 'Sardes Antik Kenti', 'Kula Peribacaları'], funFact: 'Tarihte paranın ilk basıldığı yer olan Lidya başkenti Sardes buradadır.' }
  },
  {
    id: 'kahramanmaras',
    name: 'Kahramanmaraş',
    plateCode: '46',
    country: 'Turkey',
    population: '1.17 Milyon',
    shortDesc: 'Dondurmanın başkenti, şairler ve kahramanlar şehri.',
    region: 'Akdeniz',
    details: { cuisine: 'Maraş Dondurması, Tarhana, Eli Böğründe', climate: 'Akdeniz', places: ['Yedi Güzel Adam Müzesi', 'Başkonuş Yaylası', 'Taş Köprü'], funFact: 'Çatal ve bıçakla yenen dünyadaki tek dondurma olan Maraş dondurması buraya özgüdür.' }
  },
  {
    id: 'mardin',
    name: 'Mardin',
    plateCode: '47',
    country: 'Turkey',
    population: '870,000',
    shortDesc: 'Taşın dile geldiği, gündüzü seyranlık gecesi gerdanlık şehir.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Kaburga Dolması, Sembusek, Süryani Çöreği', climate: 'Karasal', places: ['Deyrulzafaran Manastırı', 'Eski Mardin Evleri', 'Kasımiye Medresesi'], funFact: 'Şehirdeki taş evler o kadar ustaca yapılmıştır ki, hiçbiri diğerinin gölgesini kesmez.' }
  },
  {
    id: 'mugla',
    name: 'Muğla',
    plateCode: '48',
    country: 'Turkey',
    population: '1.05 Milyon',
    shortDesc: 'Bodrum, Marmaris, Fethiye... Yeryüzü cenneti.',
    region: 'Ege',
    details: { cuisine: 'Çökertme Kebabı, Kabak Çiçeği Dolması', climate: 'Akdeniz', places: ['Ölüdeniz', 'Bodrum Kalesi', 'Kelebekler Vadisi', 'İztuzu Plajı'], funFact: 'Türkiye\'nin en uzun kıyı şeridine sahip ilidir.' }
  },
  {
    id: 'mus',
    name: 'Muş',
    plateCode: '49',
    country: 'Turkey',
    population: '399,000',
    shortDesc: 'Lalesi, ovası ve Malazgirt zaferiyle tarihin dönüm noktası.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Muş Köftesi, Çorti Aşı', climate: 'Karasal', places: ['Malazgirt Ovası', 'Tarihi Murat Köprüsü'], funFact: 'Anadolu\'nun kapılarının Türklere açıldığı Malazgirt Meydan Muharebesi burada yapılmıştır.' }
  },
  {
    id: 'nevsehir',
    name: 'Nevşehir',
    plateCode: '50',
    country: 'Turkey',
    population: '310,000',
    shortDesc: 'Güzel atlar diyarı Kapadokya, peribacaları ve balonlar şehri.',
    region: 'İç Anadolu',
    details: { cuisine: 'Testi Kebabı, Kabak Çekirdeği', climate: 'Karasal', places: ['Göreme Açık Hava Müzesi', 'Uçhisar Kalesi', 'Derinkuyu Yeraltı Şehri', 'Peribacaları'], funFact: 'Star Wars filmi için ilham kaynağı olmuş, eşsiz bir volkanik coğrafyadır.' }
  },
  {
    id: 'nigde',
    name: 'Niğde',
    plateCode: '51',
    country: 'Turkey',
    population: '365,000',
    shortDesc: 'Medeniyetlerin yaşatıldığı, dağcıların gözdesi Aladağlar\'ın şehri.',
    region: 'İç Anadolu',
    details: { cuisine: 'Niğde Tavası, Elma, Gazoz', climate: 'Karasal', places: ['Niğde Kalesi', 'Gümüşler Manastırı', 'Aladağlar Milli Parkı'], funFact: 'Gülümseyen Meryem Ana freskine sahip tek manastır (Gümüşler) buradadır.' }
  },
  {
    id: 'ordu',
    name: 'Ordu',
    plateCode: '52',
    country: 'Turkey',
    population: '763,000',
    shortDesc: 'Mavinin ve yeşilin kucaklaştığı, fındık ve oksijen yurdu.',
    region: 'Karadeniz',
    details: { cuisine: 'Pancar Çorbası, Galdirik Kavurması, Fındık', climate: 'Karadeniz', places: ['Boztepe', 'Yason Burnu', 'Perşembe Yaylası'], funFact: 'Avrupa\'nın ve Türkiye\'nin deniz üzerine inşa edilen ilk havalimanı buradadır.' }
  },
  {
    id: 'rize',
    name: 'Rize',
    plateCode: '53',
    country: 'Turkey',
    population: '344,000',
    shortDesc: 'Çayın başkenti, yaylaların zirvesi, yağmurun şehri.',
    region: 'Karadeniz',
    details: { cuisine: 'Muhlama, Laz Böreği, Hamsili Pilav', climate: 'Karadeniz', places: ['Ayder Yaylası', 'Fırtına Deresi', 'Zilkale', 'Pokut Yaylası'], funFact: 'Türkiye\'nin en çok yağış alan ilidir, çay tarlalarıyla kaplıdır.' }
  },
  {
    id: 'sakarya',
    name: 'Sakarya',
    plateCode: '54',
    country: 'Turkey',
    population: '1.08 Milyon',
    shortDesc: 'Doğa harikası gölleri ve longozuyla Marmara\'nın yeşil arka bahçesi.',
    region: 'Marmara',
    details: { cuisine: 'Islama Köfte, Kabak Tatlısı', climate: 'Geçiş İklimi', places: ['Sapanca Gölü', 'Acarlar Longozu', 'Justinianus Köprüsü'], funFact: 'Acarlar Longozu, Türkiye\'nin tek parça halindeki en büyük su basar ormanıdır.' }
  },
  {
    id: 'samsun',
    name: 'Samsun',
    plateCode: '55',
    country: 'Turkey',
    population: '1.37 Milyon',
    shortDesc: 'Atatürk\'ün kurtuluş meşalesini yaktığı, Karadeniz\'in başkenti.',
    region: 'Karadeniz',
    details: { cuisine: 'Samsun Pidesi (Bafra/Terme), Nokul', climate: 'Karadeniz', places: ['Bandırma Vapuru', 'Amisos Tepesi', 'Kızılırmak Deltası', 'Atatürk Anıtı'], funFact: 'Efsanevi Amazon kadın savaşçıların Terme ilçesinde yaşadığına inanılır.' }
  },
  {
    id: 'siirt',
    name: 'Siirt',
    plateCode: '56',
    country: 'Turkey',
    population: '331,000',
    shortDesc: 'Üç dilli kardeş şehir, fıstığı ve büryanı ile meşhur.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Büryan Kebabı, Perde Pilavı, Siirt Fıstığı', climate: 'Karasal', places: ['Tillo', 'Delikli Taş (Rasıl Hacar)', 'Veysel Karani Türbesi'], funFact: 'Büryan kebabı, kuyuya sarkıtılan bütün kuzu ile yapılan, kuyu kebabının atasıdır.' }
  },
  {
    id: 'sinop',
    name: 'Sinop',
    plateCode: '57',
    country: 'Turkey',
    population: '220,000',
    shortDesc: 'Türkiye\'nin en kuzey ucu, en mutlu insanların şehri.',
    region: 'Karadeniz',
    details: { cuisine: 'Sinop Mantısı, Nokul', climate: 'Karadeniz', places: ['Tarihi Sinop Cezaevi', 'Hamsilos Koyu', 'İnceburun Feneri', 'Erfelek Şelaleleri'], funFact: 'Türkiye\'de trafik lambasının olmadığı tek il merkezidir (mutluluk sırrı olabilir).' }
  },
  {
    id: 'sivas',
    name: 'Sivas',
    plateCode: '58',
    country: 'Turkey',
    population: '635,000',
    shortDesc: 'Selçuklu\'nun kalbi, cumhuriyetin temellerinin atıldığı şehir.',
    region: 'İç Anadolu',
    details: { cuisine: 'Sivas Köftesi, Peskutan Çorbası', climate: 'Sert Karasal', places: ['Divriği Ulu Camii (UNESCO)', 'Gök Medrese', 'Çifte Minare', 'Kangal Balıklı Kaplıca'], funFact: 'Ünlü Kangal köpeklerinin ve doktor balıkların anavatanıdır.' }
  },
  {
    id: 'tekirdag',
    name: 'Tekirdağ',
    plateCode: '59',
    country: 'Turkey',
    population: '1.14 Milyon',
    shortDesc: 'Marmara\'nın incisi, köftesi, kirazı ve bağları ile ünlü.',
    region: 'Marmara',
    details: { cuisine: 'Tekirdağ Köftesi, Peynir Helvası, Hayrabolu Tatlısı', climate: 'Marmara', places: ['Rakoczi Müzesi', 'Şarköy', 'Uçmakdere (Yamaç Paraşütü)'], funFact: 'Vatan şairi Namık Kemal bu şehirde doğmuştur.' }
  },
  {
    id: 'tokat',
    name: 'Tokat',
    plateCode: '60',
    country: 'Turkey',
    population: '597,000',
    shortDesc: 'Tarihin ve lezzetin buluştuğu, yaprak sarmasının başkenti.',
    region: 'Karadeniz',
    details: { cuisine: 'Tokat Kebabı, Bağ Yaprağı, Bat', climate: 'Geçiş İklimi', places: ['Ballıca Mağarası', 'Tokat Kalesi', 'Taşhan'], funFact: 'Jül Sezar ünlü "Veni, Vidi, Vici" (Geldim, Gördüm, Yendim) sözünü Zile ilçesinde söylemiştir.' }
  },
  {
    id: 'trabzon',
    name: 'Trabzon',
    plateCode: '61',
    country: 'Turkey',
    population: '818,000',
    shortDesc: 'Hamsi, horon ve futbol şehri, Sümela\'nın ev sahibi.',
    region: 'Karadeniz',
    details: { cuisine: 'Kuymak, Akçaabat Köfte, Hamsi Tava, Vakfıkebir Ekmeği', climate: 'Karadeniz', places: ['Sümela Manastırı', 'Uzungöl', 'Atatürk Köşkü', 'Ayasofya'], funFact: 'Kanuni Sultan Süleyman Trabzon\'da doğmuş ve şehzadelik yapmıştır.' }
  },
  {
    id: 'tunceli',
    name: 'Tunceli',
    plateCode: '62',
    country: 'Turkey',
    population: '83,000',
    shortDesc: 'Munzur\'un serin suları, doğa harikası milli parklar.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Şir, Zerefet (Babuko)', climate: 'Karasal', places: ['Munzur Vadisi Milli Parkı', 'Pertek Kalesi', 'Ovacık Gözeleri'], funFact: 'Türkiye\'de okuma yazma oranının en yüksek olduğu illerin başında gelir.' }
  },
  {
    id: 'sanliurfa',
    name: 'Şanlıurfa',
    plateCode: '63',
    country: 'Turkey',
    population: '2.17 Milyon',
    shortDesc: 'Peygamberler şehri, tarihin sıfır noktası Göbeklitepe\'nin evi.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Urfa Kebap, Çiğ Köfte, Şıllık Tatlısı', climate: 'Karasal', places: ['Göbeklitepe', 'Balıklıgöl', 'Harran Evleri', 'Halfeti'], funFact: 'Tarihin bilinen en eski tapınağı Göbeklitepe (M.Ö. 10.000) buradadır.' }
  },
  {
    id: 'usak',
    name: 'Uşak',
    plateCode: '64',
    country: 'Turkey',
    population: '375,000',
    shortDesc: 'İlklerin şehri, halı dokumacılığının ve Karun hazinelerinin merkezi.',
    region: 'Ege',
    details: { cuisine: 'Tarhana Çorbası, Demir Tatlısı', climate: 'Karasal', places: ['Ulubey Kanyonu', 'Karun Hazineleri Müzesi', 'Blandus Antik Kenti'], funFact: 'Dünyanın en uzun ikinci kanyonu olan Ulubey Kanyonu buradadır.' }
  },
  {
    id: 'van',
    name: 'Van',
    plateCode: '65',
    country: 'Turkey',
    population: '1.12 Milyon',
    shortDesc: 'Deniz gibi gölü, dillere destan kahvaltısı ve kedisiyle ünlü.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Van Kahvaltısı, Otlu Peynir, İnci Kefali', climate: 'Karasal', places: ['Akdamar Adası', 'Van Kalesi', 'Muradiye Şelalesi'], funFact: 'Van kedisi, bir gözü mavi diğer gözü kehribar rengi olan dünyadaki tek kedi türüdür.' }
  },
  {
    id: 'yozgat',
    name: 'Yozgat',
    plateCode: '66',
    country: 'Turkey',
    population: '418,000',
    shortDesc: 'Bozok yaylasının yiğit şehri, Türkiye\'nin ilk milli parkı.',
    region: 'İç Anadolu',
    details: { cuisine: 'Testi Kebabı, Arabaşı, Parmak Çörek', climate: 'Karasal', places: ['Çamlık Milli Parkı', 'Sarıkaya Roma Hamamı (Kral Kızı)', 'Saat Kulesi'], funFact: 'Türkiye\'nin ilk milli parkı Yozgat Çamlığı\'dır.' }
  },
  {
    id: 'zonguldak',
    name: 'Zonguldak',
    plateCode: '67',
    country: 'Turkey',
    population: '589,000',
    shortDesc: 'Kara elmas diyarı, madencilerin ve emeğin başkenti.',
    region: 'Karadeniz',
    details: { cuisine: 'Osmanlı Çileği, Malay', climate: 'Karadeniz', places: ['Gökgöl Mağarası', 'Maden Müzesi', 'Filyos'], funFact: 'Türkiye\'nin en zengin taş kömürü yatakları buradadır.' }
  },
  {
    id: 'aksaray',
    name: 'Aksaray',
    plateCode: '68',
    country: 'Turkey',
    population: '429,000',
    shortDesc: 'Kapadokya\'nın giriş kapısı, Ihlara Vadisi\'nin incisi.',
    region: 'İç Anadolu',
    details: { cuisine: 'Aksaray Tavası, Şerbetli Pide', climate: 'Karasal', places: ['Ihlara Vadisi', 'Sultanhanı Kervansarayı', 'Eğri Minare'], funFact: 'Dünyanın en büyük kervansarayı Sultanhanı buradadır.' }
  },
  {
    id: 'bayburt',
    name: 'Bayburt',
    plateCode: '69',
    country: 'Turkey',
    population: '84,000',
    shortDesc: 'Çoruh Nehri\'nin kıyısında, Baksı Müzesi ile sanatı yaşatan şehir.',
    region: 'Karadeniz',
    details: { cuisine: 'Tel Helva, Bayburt Ketesi, Galacoş', climate: 'Karasal', places: ['Baksı Müzesi', 'Bayburt Kalesi', 'Aydıntepe Yeraltı Şehri'], funFact: 'Baksı Müzesi, dağın başında kurularak Avrupa Konseyi Müze Ödülü\'nü kazanmıştır.' }
  },
  {
    id: 'karaman',
    name: 'Karaman',
    plateCode: '70',
    country: 'Turkey',
    population: '260,000',
    shortDesc: 'Türk dilinin başkenti, koyunuyla meşhur tarih kenti.',
    region: 'İç Anadolu',
    details: { cuisine: 'Arabaşı Çorbası, Batırık', climate: 'Karasal', places: ['Karaman Kalesi', 'Binbirkilise', 'Taşkale Tahıl Ambarları'], funFact: 'Karamanoğlu Mehmet Bey, 1277\'de Türkçeyi burada resmi dil ilan etmiştir.' }
  },
  {
    id: 'kirikkale',
    name: 'Kırıkkale',
    plateCode: '71',
    country: 'Turkey',
    population: '277,000',
    shortDesc: 'Kızılırmak\'ın can verdiği, savunma sanayinin merkezi.',
    region: 'İç Anadolu',
    details: { cuisine: 'Keskin Tavası, Sızgıt', climate: 'Karasal', places: ['Silah Müzesi', 'Çeşnigir Köprüsü', 'Hasandede Camii'], funFact: 'Türkiye\'nin ilk Silah Sanayi İhtisas OSB\'si buradadır.' }
  },
  {
    id: 'batman',
    name: 'Batman',
    plateCode: '72',
    country: 'Turkey',
    population: '630,000',
    shortDesc: 'Kara altının (petrol) ve sular altında kalan tarih Hasankeyf\'in şehri.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Şam Böreği, Perde Pilavı', climate: 'Karasal', places: ['Hasankeyf', 'Malabadi Köprüsü', 'Zeynel Bey Türbesi'], funFact: 'Dünyada adı bir çizgi roman süper kahramanıyla aynı olan tek şehirdir.' }
  },
  {
    id: 'sirnak',
    name: 'Şırnak',
    plateCode: '73',
    country: 'Turkey',
    population: '557,000',
    shortDesc: 'Nuh\'un gemisinin oturduğu Cudi Dağı\'nın şehri.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Perde Pilavı, Suryaz', climate: 'Karasal', places: ['Cudi Dağı', 'Mem u Zin Türbesi', 'Nuh Peygamber Türbesi'], funFact: 'Nuh Tufanı\'ndan sonra kurulan ilk yerleşim yeri olduğuna inanılır (Şehr-i Nuh).' }
  },
  {
    id: 'bartin',
    name: 'Bartın',
    plateCode: '74',
    country: 'Turkey',
    population: '203,000',
    shortDesc: 'Fatih\'in Çeşm-i Cihan (Dünyanın Gözü) dediği Amasra\'nın evi.',
    region: 'Karadeniz',
    details: { cuisine: 'Pumpum Çorbası, Amasra Salatası', climate: 'Karadeniz', places: ['Amasra', 'Güzelcehisar Lav Sütunları', 'Küre Dağları'], funFact: 'İsmini üzerindeki nehirde (Parthenios) gemilerin yüzebilmesinden almıştır.' }
  },
  {
    id: 'ardahan',
    name: 'Ardahan',
    plateCode: '75',
    country: 'Turkey',
    population: '92,000',
    shortDesc: 'Kafkaslara açılan kapı, buz tutan Çıldır Gölü\'nün şehri.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Kaşar Peyniri, Kaz Eti, Hinkal', climate: 'Sert Karasal', places: ['Çıldır Gölü', 'Şeytan Kalesi', 'Ardahan Kalesi'], funFact: 'Her yıl Damal dağlarına Atatürk\'ün silüeti yansır.' }
  },
  {
    id: 'igdir',
    name: 'Iğdır',
    plateCode: '76',
    country: 'Turkey',
    population: '203,000',
    shortDesc: 'Doğunun Çukurova\'sı, üç ülkeye sınırı olan tek il.',
    region: 'Doğu Anadolu',
    details: { cuisine: 'Bozbaş (Piti), Taş Köfte', climate: 'Mikroklima', places: ['Tuzluca Tuz Mağaraları', 'Nuh\'un Gemisi Anıtı', 'Meteor Çukuru'], funFact: 'Mikroklima iklimi sayesinde Doğu Anadolu\'da pamuk yetişen tek ildir.' }
  },
  {
    id: 'yalova',
    name: 'Yalova',
    plateCode: '77',
    country: 'Turkey',
    population: '296,000',
    shortDesc: 'Atatürk\'ün "Benim kentimdir" dediği, çiçek ve termal şehri.',
    region: 'Marmara',
    details: { cuisine: 'Yalova Sütlüsü, Termal Çorbası', climate: 'Geçiş İklimi', places: ['Yürüyen Köşk', 'Termal Kaplıcaları', 'Sudüşen Şelalesi'], funFact: 'Yürüyen Köşk, bir ağacın dalı kesilmesin diye raylar üzerinde kaydırılmıştır.' }
  },
  {
    id: 'karabuk',
    name: 'Karabük',
    plateCode: '78',
    country: 'Turkey',
    population: '252,000',
    shortDesc: 'UNESCO mirası Safranbolu evleri ve demir çelik sanayisi.',
    region: 'Karadeniz',
    details: { cuisine: 'Kuyu Kebabı, Safranlı Lokum, Bükme', climate: 'Karadeniz', places: ['Safranbolu Evleri', 'Kristal Teras', 'Bulak Mencilis Mağarası'], funFact: 'Dünyanın en pahalı baharatı safranın yetiştiği nadir yerlerdendir.' }
  },
  {
    id: 'kilis',
    name: 'Kilis',
    plateCode: '79',
    country: 'Turkey',
    population: '147,000',
    shortDesc: 'Zeytinin ana vatanı, güneyin sıcak ve misafirperver şehri.',
    region: 'Güneydoğu Anadolu',
    details: { cuisine: 'Kilis Tava, Cennet Çamuru, Katmer', climate: 'Akdeniz', places: ['Ravanda Kalesi', 'Oylum Höyük', 'Mevlevihane'], funFact: 'Nüfusuna oranla dünyada en çok mülteciye ev sahipliği yapan Nobel Barış Ödülü adayı şehirdir.' }
  },
  {
    id: 'osmaniye',
    name: 'Osmaniye',
    plateCode: '80',
    country: 'Turkey',
    population: '559,000',
    shortDesc: 'Torosların eteğinde, kaleler şehri ve yer fıstığı diyarı.',
    region: 'Akdeniz',
    details: { cuisine: 'Osmaniye Yer Fıstığı, Tirşik Çorbası, Bayram Kömbesi', climate: 'Akdeniz', places: ['Kastabala Antik Kenti', 'Karatepe Aslantaş Müzesi', 'Toprakkale'], funFact: 'Sınırları içerisinde en çok kale barındıran "Kaleler Şehri" olarak bilinir.' }
  },
  {
    id: 'duzce',
    name: 'Düzce',
    plateCode: '81',
    country: 'Turkey',
    population: '405,000',
    shortDesc: 'Batı Karadeniz\'in yeşil incisi, şelaleler ve yaylalar kenti.',
    region: 'Karadeniz',
    details: { cuisine: 'Çerkez Tavuğu, Akçakoca Melengüçceği', climate: 'Karadeniz', places: ['Samandere Şelalesi', 'Akçakoca Ceneviz Kalesi', 'Güzeldere Şelalesi'], funFact: 'Türkiye\'nin en son il olan (81.) ve en genç şehridir.' }
  }
];

export const BULGARIA_POLYGON = "";