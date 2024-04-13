//Apartado de vinos
$(document).ready(function () {
    $('.accordion-button').click(function () {
        var acord = $(this).text().trim();


        switch (acord) {
            case 'Vino Tinto':
                $('#imgvino').attr('src', 'https://th.bing.com/th/id/R.ec08c2c52175dd14c0ce41b38c523905?rik=C8xeEXFHm4IG0w&pid=ImgRaw&r=0');
                $('#headervinos').replaceWith('<div class="card-header" id="headervinos">Informacion sobre el vino tinto</div>');
                $('#h4vinos').replaceWith('<h4 class="card-title" id="h4vinos">Vino tinto / vino rojo</h4>');
                $('#pvinos').replaceWith('<p class="card-text" id="pvinos"><code>Fuente de antioxidantes:</code> El vino tinto contiene antioxidantes como los polifenoles, especialmente el resveratrol, que se ha relacionado con beneficios para la salud cardiovascular y la prevención de enfermedades degenerativas. Estos antioxidantes ayudan a combatir el estrés oxidativo en el cuerpo y protegen las células contra los daños causados ​​por los radicales libres.</p>');
                break;
            case 'Vino Blanco':

                $('#imgvino').attr('src', 'https://th.bing.com/th/id/R.c577d8f61e2b0cc02803f3581e02acfc?rik=THKjUp31TcerwA&pid=ImgRaw&r=0');
                $('#headervinos').replaceWith('<div class="card-header" id="headervinos">Informacion sobre el vino blanco</div>');
                $('#h4vinos').replaceWith('<h4 class="card-title" id="h4vinos">Vino blanco / Blanco joven</h4>');
                $('#pvinos').replaceWith('<p class="card-text" id="pvinos"><code>Resveratrol:</code> Aunque en menor cantidad que en el vino tinto, el vino blanco también contiene resveratrol, un compuesto antioxidante que se encuentra en la piel de las uvas. El resveratrol se ha asociado con varios beneficios para la salud, incluida la protección contra enfermedades cardiovasculares y el envejecimiento celular.</p>');
                break;
            case 'Vino Rosado':
                $('#imgvino').attr('src', 'https://cdn.lifestyleasia.com/wp-content/uploads/2019/12/16142023/rose-wine-alfresco-royalty-free-image-157619922-1550671931.jpg');
                $('#headervinos').replaceWith('<div class="card-header" id="headervinos">Informacion sobre el vino rosado</div>');
                $('#h4vinos').replaceWith('<h4 class="card-title" id="h4vinos">Vino rosado / Clarete / Blush</h4>');
                $('#pvinos').replaceWith('<p class="card-text" id="pvinos"><code>Bajo en taninos:</code> El vino rosado, al igual que el vino blanco, suele tener un contenido más bajo de taninos en comparación con el vino tinto. Los taninos son compuestos que se encuentran principalmente en la piel y las semillas de las uvas y pueden causar reacciones adversas en algunas personas, como dolores de cabeza o irritación estomacal. Por lo tanto, para aquellos que son sensibles a los taninos, el vino rosado puede ser una opción más suave y tolerable.</p>');
                break;
            default:
                break;
        }
    });
});


//Apartado de Paises
$(document).ready(function () {
    $('#rowpaises a').click(function () {
        switch ($(this).attr('id')) {
            case 'a1paises':
                //etiqueta hr
                $('#rowpaises a').next('hr.my-2').remove();
                $(this).after('<hr class="my-2">');
                //Info
                $('#h4paisesinfo').text('Francia / Regiones productoras de vino');
                $('#contenidopaisesinfo').html('<p class="text-white">Francia es famosa por sus prestigiosos vinos de regiones como Burdeos, Borgoña, Champagne, Valle del Ródano y Alsacia, entre otros. Es considerado uno de los países más importantes en la historia y la cultura del vino.</p><p class="text-white">La región que más produce vino en Francia es <code>Burdeos</code>. Burdeos es una de las regiones vinícolas más famosas y prestigiosas del mundo. Produce una amplia variedad de vinos, tanto tintos como blancos, y es conocida por sus etiquetas de alta calidad y su larga tradición en la vinificación. </p><p class="text-white">Bordeaux es especialmente reconocida por sus vinos tintos elaborados principalmente con variedades como Cabernet Sauvignon, Merlot y Cabernet Franc. La región abarca una amplia área a lo largo del río Garona en el suroeste de Francia y está dividida en subregiones como Médoc, Graves, Saint-Émilion y Pomerol, cada una con sus propias características distintivas y estilos de vino.</p>');




                //Card
                $('#imgpaises').attr('src', 'https://wordpress-network.prod.aws.skyscnr.com/wp-content/uploads/2018/10/bridge-bordeaux-france-eyeem-26898942-120679841.jpg');
                $('#headerpaises').text('Top 1 productor de vinos en Francia');
                $('#h4paises').text('Burdeos / Burdeaux');
                $('#ppaises').html('<p class="card-text"><code>Burdeos</code> es una de las regiones vinícolas más célebres y prestigiosas del mundo, ubicada en el suroeste de Francia.</p>');
                break;
            case 'a2paises':
                $('#rowpaises a').next('hr.my-2').remove();
                $(this).after('<hr class="my-2">');
                //Info
                $('#h4paisesinfo').text('Italia / Regiones productoras de vino');
                $('#contenidopaisesinfo').html('<p class="text-white">Italia es otro país líder en la producción de vino, con una amplia variedad de estilos que van desde los tintos robustos de la Toscana hasta los espumosos de Prosecco y los blancos frescos de Sicilia y Trentino.</p><p class="text-white">La región que más produce vino en Italia es la región de <code>Sicilia.</code> Sicilia es la isla más grande del Mediterráneo y cuenta con una larga historia en la producción de vino. La región es conocida por su diversidad de suelos y microclimas, lo que permite el cultivo de una amplia variedad de uvas. </p><p class="text-white">Sicilia produce una gran cantidad de vino, tanto en términos de volumen como de variedad. La isla es especialmente conocida por sus vinos tintos elaborados con variedades como Nero dAvola, Frappato y Nerello Mascalese. Estos vinos suelen ser afrutados, con notas especiadas y taninos suaves.</p>');
                //card
                $('#imgpaises').attr('src', 'https://wp.essentialitaly.co.uk/wp-content/uploads/2019/09/samuel-ferrara-uNvgvo2cs7k-unsplash.jpg');
                $('#headerpaises').text('Top 1 productor de vinos en Italia');
                $('#h4paises').text('Sicilia / La Perla del Mediterraneo');
                $('#ppaises').html('<p class="card-text"><code>Burdeos</code> Esta región vinícola diversa y vibrante cuenta con una gran variedad de microclimas y suelos, que permiten el cultivo de una amplia gama de uvas autóctonas e internacionales. Entre las variedades tintas más destacadas se encuentran Nero d´Avola, Frappato y Nerello Mascalese, mientras que en las blancas destacan Grillo, Catarratto e Inzolia.</p>');
                break;
            case 'a3paises':
                $('#rowpaises a').next('hr.my-2').remove();
                $(this).after('<hr class="my-2">');
                 //Info
                 $('#h4paisesinfo').text('España / Regiones productoras de vino');
                 $('#contenidopaisesinfo').html('<p class="text-white">España es conocida por sus vinos tintos de Rioja, Ribera del Duero y Priorat, así como por los espumosos de Cava y los blancos de Rías Baixas y Verdejo.</p><p class="text-white">La región que más produce vino en España es la región de La <code>Rioja.</code> La Rioja es una de las zonas vinícolas más importantes y prestigiosas del país. Esta región está ubicada en el norte de España y se divide en tres subregiones principales: Rioja Alta, Rioja Alavesa y Rioja Oriental.</p><p class="text-white">La Rioja es conocida principalmente por sus vinos tintos elaborados principalmente con las variedades Tempranillo, Garnacha, Graciano y Mazuelo. Estos vinos se caracterizan por su elegancia, equilibrio y capacidad de envejecimiento. La región también produce vinos blancos y rosados de alta calidad, aunque en menor cantidad que los tintos.</p>');
                 //card
                 $('#imgpaises').attr('src', 'https://th.bing.com/th/id/R.7a9d375ba59a4ae43a3d1809bc1c5e30?rik=%2bMSqnzToY1q6XQ&pid=ImgRaw&r=0');
                 $('#headerpaises').text('Top 1 productor de vinos en España');
                 $('#h4paises').text('La rioja / Alta, Alavesa y Oriental');
                 $('#ppaises').html('<p class="card-text"><code>La Rioja</code> es una región vinícola emblemática ubicada en el norte de España, conocida por la calidad excepcional de sus vinos y su larga tradición en la elaboración vinícola.</p>');
                break;
            default:
                // Código por defecto si no coincide con ningún caso
                break;
        }
    });
});

