<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1" />
    <link href="csss/common__honest-rare.css" rel="stylesheet">
    <link href="csss/product-page.css" rel="stylesheet">
    <title></title>
</head>
<body>
    <?php include("h&f/header.php"); ?>
    <div class="main-content">
        <div class="flex">
            <div class="gallery">
                <div class="gallery__sale">
                    SALE
                </div>
                <div class="gallery__path">
                    <a class="gallery__path-line">Homepage</a>
                    <a class="gallery__path-slash">/</a>
                    <a class="gallery__path-line">Gin</a>
                    <a class="gallery__path-slash">/</a>
                    <a class="gallery__path-last">Dry Gin</a>
                </div>
                <div data-swipe-threshold="100" id="o1" class="gallery-1">
                    <div class="gallery-img"><img src="images/Dry.png"></div>
                    <div class="gallery-img"><img src="images/Dry1.png"></div>
                    <div class="gallery-img"><img src="images/Dry2.png"></div>
                </div>
                <div class="gallery-button">
                    <input type="image" class="gallery_1" src="images/like.png">
                    <input type="image" class="gallery_2" src="images/like.png">
                    <input type="image" class="gallery_3" src="images/like.png">
                </div>
            </div>
            <div class="product">
                <div class="product__title">DRY GIN</div>
                <div class="product__price">
                    <span class="product__main">€29,50</span>
                    <span class="product__bottom-price">+ 0,15€ Pfand</span>
                    <span class="product__top-price">(€59,00 pro l)</span>
                    <span class="product__matter-size">Inhalt: <strong>0,5 l</strong></span>
                </div>
                <div class="product__tax">
                    inkl. MwSt
                </div>
                <div class="product__pre-price">
                    <span class="product__price-was"><strike>€35,80</strike></span> 
                    <span class="product__price-net">Du sparst: €6,30 (18%)</span> 
                </div>
                <div class="amount">
                    <div style="width:93px; display: inline-block;">
                        <a class="amount_plus">+</a>
                        <input type="text" value=1 class="amount_number">
                        <a class="amount_minus">-</a>
                    </div>
                    <div class="amount_button_container"><button class="amount_button">In meinen Getränkekorb</button></div>
                    <div class="marked_storage">&nbspAuf Lager</div>
                    <div class="amount_favorite">
                        ♡
                    </div>
                </div>
                <div class="bonuses">
                    <div class="flex">
                        <div style="margin-top: 10px;"><img src="images/like.png"></div>
                        <div style="margin-top: 10px;" class="bonuses_exp">Sichere <br> Bezahlung</div>
                    </div>
                    <div class="flex">
                        <div style="margin-top: 10px;"><img src="images/like.png"></div>
                        <div style="margin-top: 10px;" class="bonuses_exp">Telefonische <br> Beratung</div>
                    </div>
                    <div class="flex last">
                        <div class="bonuses_exp">Alle <br> Getränke <br> von</div>
                        <div style="margin-top: 10px;"><img src="images/like.png"></div>
                    </div>
                </div>
                <div class="Lieferung">
                    Lieferung
                </div>
                <div class="others">
                    <span style="margin-right: 6px;">Versand:</span>
                    <span>€0,00</span>
                </div>
                <div class="others">
                    <span style="margin-right: 6px;">Lieferzeit:</span>
                    <span>3-5 Tage</span>
                </div>
                <div class="others">
                    <span style="margin-right: 6px;">Verkauf und Versand durch:</span>
                    <span>Honest & Rare (Versender: Braumanufaktur Hertl)</span>
                </div>
            </div>
        </div>
        <div class="featuress" class="flex">
            <div class="features">
                <span style="margin: 0 auto;"><img src="images/like.png"></span>
                <span class="features_text">Gin</span>
            </div>
            <div class="features">
                <span style="margin: 0 auto;"><img src="images/like.png"></span>
                <span class="features_text">blumig, herb, <br> fruchtig, Mandarine</span>
            </div>
            <div class="features">
                <span style="margin: 0 auto;"><img src="images/like.png"></span>
                <span class="features_text">Hallertauer <br> Mandarina</span>
            </div>
            <div class="features">
                <span style="margin: 0 auto;"><img src="images/like.png"></span>
                <span class="features_text">Schlüsselfeld, Bayern</span>
            </div>
            <div class="features odd">
                <span style="margin: 0 auto;"><img src="images/like.png"></span>
                <span class="features_text">37.5% vol.</span>
            </div>
        </div>
        <div style="margin-top: 58px; display: block;" class="flex">
            <div class="tab_warp">
                <input type="radio" name="tab" id="rad1" class="radio1" checked>
                <label for="rad1" class="radio1_tab">Produktbeschreibung</label>
                <input type="radio" name="tab" id="rad2" class="radio2">
                <label for="rad2" class="radio2_tab">Herstellerinformationen</label>
                <div class="bottle_tab">
                    <img src="images/beauty shot.png">
                </div>
                <div class="map_tab">
                    <img src="images/top-logo.png">
                </div>
            </div>
        </div>
        <div class="liters">
            <div class="liters_content">
                <span>Inhalt:</span>
                <div class="affixes">0,5 Liter</div>
            </div>
            <div class="liters_content gray">
                <span>Hersteller:</span>
                <div class="affixes">Braumanufaktur Hertl</div>
            </div>
            <div class="liters_content">
                <span>Abfüllmenge:</span>
                <div class="affixes">200 Flaschen</div>
            </div>
            <div class="liters_content gray">
                <span>Getränketyp:</span>
                <div class="affixes">Gin</div>
            </div>
            <div class="liters_content">
                <span>Lebensmittelunternehmen:</span>
                <div class="affixes">Braumanufaktur Hertl, Thüngfeld 61, 96132 Schlüsselfeld</div>
            </div>
        </div>
    </div>
    <?php include("h&f/footer.php"); ?>
    <script src="product-js.js"></script>
    <script src="swiped-events.min.js"></script>
</body>