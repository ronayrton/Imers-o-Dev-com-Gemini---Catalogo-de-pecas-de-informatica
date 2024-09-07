// dados.js
const pecasInformatica = [
    {
        titulo: "Processador Intel Core i9",
        descricao: "Um processador de alto desempenho com 8 núcleos e 16 threads, ideal para tarefas intensivas.",
        link: "https://www.intel.com/i9"
    },
    {
        titulo: "Processador AMD Ryzen 9",
        descricao: "Processador de 12 núcleos e 24 threads, excelente para multitarefas e jogos.",
        link: "https://www.amd.com/ryzen9"
    },
    {
        titulo: "Placa de Vídeo NVIDIA RTX 3080",
        descricao: "Placa de vídeo de última geração com 10GB de memória GDDR6X, excelente para jogos e renderização.",
        link: "https://www.nvidia.com/rtx3080"
    },
    {
        titulo: "Placa de Vídeo AMD Radeon RX 6800 XT",
        descricao: "Placa gráfica poderosa com 16GB GDDR6, projetada para jogos em alta resolução.",
        link: "https://www.amd.com/rx6800xt"
    },
    {
        titulo: "Memória RAM Corsair Vengeance 16GB",
        descricao: "Memória DDR4 de 16GB com velocidade de 3200MHz, ideal para performance estável.",
        link: "https://www.corsair.com/ram16gb"
    },
    {
        titulo: "Memória RAM Kingston HyperX 32GB",
        descricao: "Memória DDR4 de 32GB para maior capacidade e multitarefas fluídas.",
        link: "https://www.kingston.com/hyperx32gb"
    },
    {
        titulo: "SSD Samsung 970 EVO Plus 1TB",
        descricao: "SSD NVMe com velocidade de leitura de 3500MB/s, para armazenamento rápido e confiável.",
        link: "https://www.samsung.com/970evo"
    },
    {
        titulo: "SSD Kingston A2000 500GB",
        descricao: "SSD NVMe com 500GB de armazenamento, perfeito para sistemas rápidos e eficientes.",
        link: "https://www.kingston.com/a2000"
    },
    {
        titulo: "HD Seagate Barracuda 2TB",
        descricao: "Disco rígido de alta capacidade, ideal para armazenar grandes volumes de dados.",
        link: "https://www.seagate.com/barracuda2tb"
    },
    {
        titulo: "HD Western Digital Blue 1TB",
        descricao: "Disco rígido confiável de 1TB para armazenamento de arquivos do dia a dia.",
        link: "https://www.wd.com/blue1tb"
    },
    {
        titulo: "Fonte Corsair RM850x 850W",
        descricao: "Fonte modular de 850W com certificação 80 Plus Gold, excelente para sistemas de alta performance.",
        link: "https://www.corsair.com/rm850x"
    },
    {
        titulo: "Fonte EVGA 600W Bronze",
        descricao: "Fonte de alimentação com certificação 80 Plus Bronze, ideal para PCs convencionais.",
        link: "https://www.evga.com/600wbronze"
    },
    {
        titulo: "Placa-mãe ASUS ROG Strix B550-F",
        descricao: "Placa-mãe para processadores AMD com suporte a PCIe 4.0 e overclocking.",
        link: "https://www.asus.com/b550f"
    },
    {
        titulo: "Placa-mãe Gigabyte AORUS X570",
        descricao: "Placa-mãe de alta qualidade com suporte para AMD Ryzen, excelente para gamers e entusiastas.",
        link: "https://www.gigabyte.com/aorusx570"
    },
    {
        titulo: "Gabinete Cooler Master MasterBox Q300L",
        descricao: "Gabinete compacto com painel lateral em acrílico e ótima ventilação.",
        link: "https://www.coolermaster.com/q300l"
    },
    {
        titulo: "Gabinete NZXT H510",
        descricao: "Gabinete minimalista com design limpo e suporte para sistemas de resfriamento a água.",
        link: "https://www.nzxt.com/h510"
    },
    {
        titulo: "Cooler para CPU Noctua NH-D15",
        descricao: "Cooler de alto desempenho com design de torre dupla, ótimo para overclocking.",
        link: "https://www.noctua.com/nhd15"
    },
    {
        titulo: "Cooler para CPU Cooler Master Hyper 212",
        descricao: "Cooler versátil e eficiente com ventilador de 120mm, compatível com a maioria dos sockets.",
        link: "https://www.coolermaster.com/hyper212"
    },
    {
        titulo: "Mouse Gamer Logitech G502 Hero",
        descricao: "Mouse com sensor HERO 25K para máxima precisão em jogos.",
        link: "https://www.logitech.com/g502hero"
    },
    {
        titulo: "Mouse Gamer Razer DeathAdder V2",
        descricao: "Mouse ergonômico com sensor óptico de 20.000 DPI, ideal para precisão em jogos.",
        link: "https://www.razer.com/deathadderv2"
    },
    {
        titulo: "Teclado Mecânico Corsair K95 RGB",
        descricao: "Teclado mecânico de alta qualidade com iluminação RGB e switches Cherry MX.",
        link: "https://www.corsair.com/k95rgb"
    },
    {
        titulo: "Teclado Mecânico HyperX Alloy FPS",
        descricao: "Teclado mecânico compacto, perfeito para jogos FPS com switches mecânicos de resposta rápida.",
        link: "https://www.hyperxgaming.com/alloyfps"
    },
    {
        titulo: "Monitor Dell UltraSharp 27\" 4K",
        descricao: "Monitor 4K de 27 polegadas com excelente precisão de cores, ideal para designers e editores.",
        link: "https://www.dell.com/ultrasharp27"
    },
    {
        titulo: "Monitor Samsung Odyssey G7 32\" Curved",
        descricao: "Monitor curvo de 32 polegadas com taxa de atualização de 240Hz, perfeito para gamers.",
        link: "https://www.samsung.com/odysseyg7"
    },
    {
        titulo: "Fone de Ouvido HyperX Cloud II",
        descricao: "Headset gamer com som surround 7.1, ideal para imersão em jogos.",
        link: "https://www.hyperxgaming.com/cloudii"
    },
    {
        titulo: "Fone de Ouvido Razer Kraken X",
        descricao: "Fone leve e confortável com som surround 7.1 para uma experiência de jogo imersiva.",
        link: "https://www.razer.com/krakenx"
    },
    {
        titulo: "Cabo HDMI 2.1 de 2 metros",
        descricao: "Cabo HDMI com suporte a 4K e 120Hz, ideal para jogos e entretenimento de alta definição.",
        link: "https://www.hdmi.org/2.1cable"
    },
    {
        titulo: "Cabo DisplayPort 1.4 de 1.5 metros",
        descricao: "Cabo DisplayPort de alta velocidade com suporte a resoluções de até 8K.",
        link: "https://www.displayport.org/1.4cable"
    },
    {
        titulo: "Webcam Logitech C920 HD",
        descricao: "Webcam Full HD 1080p para videoconferências com alta qualidade de imagem.",
        link: "https://www.logitech.com/c920hd"
    },
    {
        titulo: "Webcam Razer Kiyo",
        descricao: "Webcam com anel de luz integrado, ideal para streamers e criadores de conteúdo.",
        link: "https://www.razer.com/kiyo"
    },
    {
        titulo: "Switch Gigabit TP-Link 8 Portas",
        descricao: "Switch de rede gigabit com 8 portas, ideal para expandir sua rede doméstica.",
        link: "https://www.tp-link.com/8portswitch"
    },
    {
        titulo: "Switch Gigabit Cisco 24 Portas",
        descricao: "Switch de rede de 24 portas gigabit, ideal para pequenas empresas e escritórios.",
        link: "https://www.cisco.com/24portswitch"
    },
    {
        titulo: "Roteador Wi-Fi 6 TP-Link Archer AX50",
        descricao: "Roteador com suporte ao padrão Wi-Fi 6, oferecendo maior velocidade e eficiência.",
        link: "https://www.tp-link.com/ax50"
    },
    {
        titulo: "Roteador Mesh Google Nest Wi-Fi",
        descricao: "Sistema de roteador mesh com cobertura expandida para toda a casa.",
        link: "https://store.google.com/nestwifi"
    },
    {
        titulo: "Placa de Captura Elgato HD60 S",
        descricao: "Placa de captura externa para streaming de alta qualidade em 1080p60.",
        link: "https://www.elgato.com/hd60s"
    },
    {
        titulo: "Placa de Captura AVerMedia Live Gamer 4K",
        descricao: "Placa de captura interna para gravação e streaming em 4K a 60FPS.",
        link: "https://www.avermedia.com/livegamer4k"
    },
    {
        titulo: "Controlador RGB Corsair iCUE",
        descricao: "Controlador de iluminação RGB para sincronizar a iluminação de todos os componentes compatíveis.",
        link: "https://www.corsair.com/icue"
    },
    {
        titulo: "Controlador RGB NZXT Hue 2",
        descricao: "Controlador RGB com suporte para múltiplas zonas de iluminação personalizável.",
        link: "https://www.nzxt.com/hue2"
    },
    {
        titulo: "Cadeira Gamer DXRacer",
        descricao: "Cadeira ergonômica com design voltado para gamers, oferecendo conforto prolongado.",
        link: "https://www.dxracer.com/gamingchair"
    },
    {
        titulo: "Cadeira Gamer ThunderX3",
        descricao: "Cadeira gamer com iluminação RGB e design ergonômico, ideal para longas sessões de jogo.",
        link: "https://www.thunderx3.com/gamingchair"
    },
    {
        titulo: "Hub USB 3.0 de 4 portas",
        descricao: "Hub compacto com 4 portas USB 3.0, ideal para conectar vários dispositivos.",
        link: "https://www.usbhub.com/4ports"
    },
    {
        titulo: "Hub USB-C para HDMI, USB 3.0 e SD Card",
        descricao: "Hub multifuncional para conectar dispositivos USB-C a HDMI, USB e cartões de memória.",
        link: "https://www.usbc.com/hub"
    },
    {
        titulo: "Headset Gamer SteelSeries Arctis 7",
        descricao: "Headset sem fio com som surround DTS, ideal para jogos com som imersivo.",
        link: "https://steelseries.com/arctis7"
    },
    {
        titulo: "Headset Gamer Logitech G935",
        descricao: "Headset sem fio com som surround 7.1 e iluminação RGB, ideal para jogos.",
        link: "https://www.logitech.com/g935"
    },
    {
        titulo: "Drive Óptico Externo LG DVD-RW",
        descricao: "Gravador de DVD externo, ideal para ler e gravar mídias físicas.",
        link: "https://www.lg.com/dvdrw"
    },
    {
        titulo: "Cartão de Memória SanDisk Ultra 128GB",
        descricao: "Cartão de memória microSD com 128GB de armazenamento, ideal para smartphones e câmeras.",
        link: "https://www.sandisk.com/ultra128gb"
    },
    {
        titulo: "Leitor de Cartão USB 3.0",
        descricao: "Leitor de cartão de alta velocidade, compatível com diversos tipos de cartões.",
        link: "https://www.cardreader.com/usb3"
    },
    {
        titulo: "Impressora Multifuncional HP LaserJet Pro",
        descricao: "Impressora a laser multifuncional com impressão rápida e digitalização.",
        link: "https://www.hp.com/laserjetpro"
    },
    {
        titulo: "Scanner de Mesa Canon Lide 300",
        descricao: "Scanner compacto e eficiente, ideal para digitalizar documentos com alta qualidade.",
        link: "https://www.canon.com/lide300"
    },
    {
        titulo: "Adaptador USB para Ethernet Gigabit",
        descricao: "Adaptador para converter portas USB em Ethernet de alta velocidade.",
        link: "https://www.ethernetadapter.com/usbtoethernet"
    }
];
