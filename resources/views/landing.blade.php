<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scenery</title>
    <!-- CSS Link -->
    <link rel="stylesheet" href="/css/landing.css">
    <!-- Swiper CSS -->

    <!-- External Icons -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
</head>

<body>
    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav_logo">Scenery</a>

            <div class="nav_menu" id="nav-menu">
                <ul class="navigation_list">
                    <li class="navigation_item">
                        <a href="#beranda" class="navigation_link">Beranda</a>
                    </li>
                    <li class="navigation_item">
                        <a href="#tentang" class="navigation_link">Tentang</a>
                    </li>
                    <li class="navigation_item">
                        <a href="#tempat" class="navigation_link">Tempat</a>
                    </li>
                    <li class="navigation_item">
                        <a href="#blog" class="navigation_link">Blog</a>
                    </li>
                    <li class="navigation_item">
                        <a href="#blog" class="navigation_link">Forum</a>
                    </li>
                    <li class="navigation_item">
                        <div class="nav_dark">
                            <span class="change-theme-name">Ganti tema</span>
                            <i class="ri-moon-line change-theme" id="theme-button"></i>
                        </div>
                    </li>
                </ul>

<<<<<<< HEAD
                {{-- icon ganti tema terang dan gelap di landing page --}}
                {{-- <div class="nav_dark">
                    <span class="change-theme-name">Ganti tema</span>
                    <i class="ri-moon-line change-theme" id="theme-button"></i>
                </div> --}}

=======
>>>>>>> 4e1a61a9190c3b9ac5e5251f21f1e3aacbace3bd
                <i class="ri-close-line navigation_close" id="navigation-close"></i>
            </div>

            <div class="nav_toggle" id="nav-toggle">
                <i class="ri-menu-3-line"></i>
            </div>
        </nav>
    </header>
    <main class="main">
        <section class="home" id="home">
            <img src="/img/home1.png" alt="" class="img_home">

            <div class="container_home container grid">
                <div class="data_home">
                    <span class="subtitle_home">Temukan tempat favoritmu</span>
                    <h1 class="title_home">Jelajahi Tempat<br><b>Terindah</b> di <b>Indonesia</b></h1>
                    <a href="#" class="button">Jelajahi</a>

                </div>

                <div class="social_home">
                    <a href="https://www.facebook.com/" target="_blank" class="social-link_home">
                        <i class="ri-facebook-box-fill"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" class="social-link_home">
                        <i class="ri-instagram-fill"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" class="social-link_home">
                        <i class="ri-twitter-fill"></i>
                    </a>
                </div>

                <div class="info_home">
                    <div>
                        <span class="info_home-title">3 tempat terbaik untuk dikunjungi</span>
                        <a href="" class="button button--flex button--link info_home-button">
                            Lihat <i class="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div class="info_home-overlay">
                        <img src="/img/home2.jpg" alt="" class="info_home-img">
                    </div>
                </div>
            </div>
        </section>

        <section section class="about section" id="about">
            <div class="about_container container grid">
                <div class="about_data">
                    <h2 class="section_title about_title">Temukan Beragam Tempat <br> Serta Informasi Tempat Terbaik</h2>
                    <p class="about_description">Kamu akan menemukan informasi terkait tempat
                        terindah dan terbaik yang belum pernah kamu
                        jelajahi sebelumnya.
                    </p>
                    <a href="#" class="button">Jelajahi Scenery</a>
                </div>

                <div class="about_img">
                    <div class="about_img-overlay">
                        <img src="/img/about1.png" alt="" class="about_img-one">
                    </div>

                    <div class="about_img-overlay">
                        <img src="/img/about2.png" alt="" class="about_img-two">
                    </div>
                </div>
            </div>
        </section>

        <section class="discover section" id="tempat">
            <h2 class="section_title">Pilih Tempat
                <br> Terbaik dan Terindah
            </h2>

            <div class="discover_container container swiper-container">
                <div class="swiper-wrapper">
                    <!-- place discover 1 -->
                    <div class="discover_card swiper-slide">
                        <img src="/img/place1.png" alt="" class="discover_img">
                        <div class="discover_data">
                            <h2 class="discover_title">Pangandaran</h2>
                            <span class="discover_description">12 Hidden Gems</span>
                        </div>
                    </div>

                    <!-- place discover 2 -->
                    <div class="discover_card swiper-slide">
                        <img src="/img/place2.png" alt="" class="discover_img">
                        <div class="discover_data">
                            <h2 class="discover_title">Papua</h2>
                            <span class="discover_description">34 Hidden Gems</span>
                        </div>
                    </div>

                    <!-- place discover 3 -->
                    <div class="discover_card swiper-slide">
                        <img src="/img/place3.png" alt="" class="discover_img">
                        <div class="discover_data">
                            <h2 class="discover_title">Bandung</h2>
                            <span class="discover_description">18 Hidden Gems</span>
                        </div>
                    </div>

                    <!-- place discover 4 -->
                    <div class="discover_card swiper-slide">
                        <img src="/img/place4.png" alt="" class="discover_img">
                        <div class="discover_data">
                            <h2 class="discover_title">Bali</h2>
                            <span class="discover_description">5 Hidden Gems</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {{-- Video Section --}}
        <section class="video section">
            <h2 class="section_title">Lihat Keindahan Indonesia</h2>

            <div class="video_container container">
                <p class="video_description">Cari lebih banyak tempat terindah dan terbaik untuk anda dan keluarga. Kemudian bagikan momen seru anda kepada banyak orang!</p>

                <div class="video_content">
                    <video id="video-file">
                        <source src="video/video.mp4" type="video/mp4">
                    </video>

                    <button class="button button--flex video_button" id="video-button">
                        <i class="ri-play-line video_button-icon" id="video-icon"></i>
                    </button>
                </div>
            </div>
        </section>
    </main>

    <script src="/js/main.js"></script>
</body>

</html>