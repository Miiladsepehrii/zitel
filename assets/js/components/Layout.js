class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="">
    <div class="header-top">
      <div class="logo desktop">
        <a href="https://www.zi-tel.com/"><img src="assets/images/logoEdit.png" alt="Ø§ÛŒÙ†ØªØ±Ù†Øª Ù¾Ø±Ø³Ø±Ø¹Øª Zitel"></a>
        <span class="border-bet-header-desk"></span><a class="phone-call-icon" href="contact-us"><img
        src="assets/images/icons/phone-alt-solid.svg" alt="phone icon"></a>
        <a class="login-in-header" href="https://my.zi-tel.com/"><i class="far fa-sign-in-alt"
                                                                    style=" vertical-align: middle;"></i>ÙˆØ±ÙˆØ¯</a>
      </div>
  
      <div class="logo mobile">
        <a href="https://www.zi-tel.com/"><img src="assets/images/zTelLogot.svg" alt="Ø§ÛŒÙ†ØªØ±Ù†Øª Ù¾Ø±Ø³Ø±Ø¹Øª Zitel"></a>
        <span class="border-bet-header-mobile"></span>
        <ul class="access-header-mobile">
          <li class="mobile-phone-icon">
            <a href="contact-us">
              <i class="fal fa-phone"></i>
            </a>
          </li>
          <li class="mobile-signin-icon">
            <a href="https://my.zi-tel.com/" target="_blank">
              <i class="far fa-sign-in-alt"></i>
            </a>
          </li>
          <li class="mobile-req-icon">
            <a href="registration">
              <i class="fal fa-pencil"></i>
            </a>
          </li>
          <li class="mobile-locate-icon">
            <a href="coverage">
              <i class="fal fa-map-marker-alt"></i>
            </a>
          </li>
  
        </ul>
        <a href="contact-us"> <span></span></a>
        <a class="login-in-header" href="register"><span></span></a>
      </div>
    </div>
  
    <nav>
      <div class="outer-menu">
        <input class="checkbox-toggle" type="checkbox"/>
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu ">
          <div class="">
            <div class="menu-col-item menu-col-1">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="https://www.zi-tel.com/">ØµÙØ­Ù‡ Ø§ØµÙ„ÛŒ</a></li>
                <li><a class="nav-link" href="registration">Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ø³Ø±ÙˆÛŒØ³</a></li>
                <li><a class="nav-link" href="coverage">Ù†ÙˆØ§Ø­ÛŒ ØªØ­Øª Ù¾ÙˆØ´Ø´</a></li>
                <li><a class="nav-link" href="home-service">Ø§ÛŒÙ†ØªØ±Ù†Øª Ø®Ø§Ù†Ú¯ÛŒ</a></li>
                <li><a class="nav-link" href="organization">Ø§ÛŒÙ†ØªØ±Ù†Øª Ø³Ø§Ø²Ù…Ø§Ù†ÛŒ</a></li>
                <li><a class="nav-link" href="point-to-point">Ù¾Ù‡Ù†Ø§ÛŒ Ø¨Ø§Ù†Ø¯ Ø§Ø®ØªØµØ§ØµÛŒ</a></li>
                <li><a class="nav-link" href="air-fiber">Ø³Ø±ÙˆÛŒØ³ Airfiber</a></li>
                <li><a class="nav-link" href="kish-zitel-fiber">Ø³Ø±ÙˆÛŒØ³ Ø¬Ø²ÛŒØ±Ù‡ Ú©ÛŒØ´</a></li>
              </ul>
              <ul class="mobile-menu-bottom">
                <li class="menu-item">
                  <a href="faq">Ø³ÙˆØ§Ù„Ø§Øª Ù…ØªØ¯Ø§ÙˆÙ„</a>
                </li>
                <li class="menu-item">
                  <a href="contact-us">ØªÙ…Ø§Ø³ Ø¨Ø§ Ù…Ø§</a>
                </li>
                <li class="menu-item">
                  <a href="about-us">Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ø§</a>
                </li>
              </ul>
            </div>
            <div class="menu-col-item menu-col-2">
              <ul class="navbar-nav-footer">
                <li class="register-box"><a class="" href="https://my.zi-tel.com">
                  <i class="fal fa-sign-in" style=" vertical-align: middle;"></i><br>
                  <span style="vertical-align: text-top;">ÙˆØ±ÙˆØ¯ Ø¨Ù‡ Ø­Ø³Ø§Ø¨ Ø²ÛŒâ€ŒØªÙ„</span>
                </a></li>
                <li class="terms-contract"><h3>Ø´Ø±Ø§ÛŒØ· Ùˆ Ø¶ÙˆØ§Ø¨Ø·</h3>
                  <a class="nav-link" target="_blank" href="/assets/pdf/contract.pdf">Ù‚Ø±Ø§Ø±Ø¯Ø§Ø¯</a><br>
                  <a class="nav-link" target="_blank" href="/assets/pdf/deposit-contract.pdf">Ù‚Ø±Ø§Ø±Ø¯Ø§Ø¯ ÙˆØ¯ÛŒØ¹Ù‡</a>
                </li>                       <li><a class="nav-link" href="faq">Ø³ÙˆØ§Ù„Ø§Øª Ù…ØªØ¯Ø§ÙˆÙ„</a></li>
                <li><a class="nav-link" href="contact-us">ØªÙ…Ø§Ø³ Ø¨Ø§ Ù…Ø§</a></li>
                <li><a class="nav-link" href="about-us">Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ø§</a></li>
                <li><a class="nav-link" href="contact-us">ÙØ±ØµØªâ€ŒÙ‡Ø§ÛŒ Ø´ØºÙ„ÛŒ</a></li>
                <li><a class="nav-link" href="sales-request">Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ø¹Ø§Ù…Ù„ÛŒØª ÙØ±ÙˆØ´</a></li>
                <li>
                  <a class="social-icon" href="https://www.linkedin.com/company/ztel" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a class="social-icon" href="https://www.instagram.com/zi.tel/" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="social-icon" href="https://twitter.com/zi_tel" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="menu-col-item menu-col-3">
              <ul>
                <li>
                  <a class="navbar-brand" href="/">
                    <img src="assets/images/logoEdit.png" width="183" height="94" alt="Ø§ÛŒÙ†ØªØ±Ù†Øª Ù¾Ø±Ø³Ø±Ø¹Øª Ø²ÛŒ ØªÙ„">
                  </a>
                </li>
                <li>
                  <span>Ù¾Ø´ØªÛŒØ¨Ø§Ù†ÛŒ Ùˆ ÙØ±ÙˆØ´</span><br>
                  <p class="tel-number-nav">
                    <span class="title-telnumber">ØªÙ‡Ø±Ø§Ù†</span><span><a href="tel:0211739">Û±Û·Û³Û¹</a><br><a
                    href="tel:02180005941">Û°Û²Û±Û´Û±ÛµÛ¹Û¸Û°Û°Û°</a></span>
                  </p>
                  <p class="tel-number-nav">
                    <span class="title-telnumber">Ú©Ø±Ø¬</span><span><a href="tel:02141598888">Û°Û²Û±Û´Û±ÛµÛ¹Û¸Û¸Û¸Û¸</a></span>
                  </p>
                  <p class="tel-number-nav">
                    <span class="title-telnumber">Ù¾Ø±Ù†Ø¯</span><span><a href="tel:02141598889">Û°Û²Û±Û´Û±ÛµÛ¹Û¸Û¸Û¸Û¹</a></span>
                  </p>
                  <p class="tel-number-nav">
                    <span class="title-telnumber">Ú©ÛŒØ´</span><span><a href="tel:02141598887">Û°Û²Û±Û´Û±ÛµÛ¹Û¸Û¸Û¸Û·</a></span>
                  </p>
                </li>
                <li class="organizing-banner">
                  <div>
                    <a referrerpolicy="origin" target="_blank" href="https://eanjoman.ir/member/JrrwLMz34w394lI4wXjjOprqa">
                      <img class="online-shop-certificate" src="https://eanjoman.ir/api/script?code=JrrwLMz34w394lI4wXjjOprqa" alt="Ø§Ù†Ø¬Ù…Ù† ØµÙ†ÙÛŒ Ú©Ø§Ø±ÙØ±Ù…Ø§ÛŒÛŒ ÙØ±ÙˆØ´Ú¯Ø§Ù‡ Ù‡Ø§ÛŒ Ø§ÛŒÙ†ØªØ±Ù†ØªÛŒ Ø´Ù‡Ø± ØªÙ‡Ø±Ø§Ù†(Ú©Ø³Ø¨ Ùˆ Ú©Ø§Ø± Ù‡Ø§ÛŒ Ø§ÛŒÙ†ØªØ±Ù†ØªÛŒ) "
                           title="Ø§Ù†Ø¬Ù…Ù† ØµÙ†ÙÛŒ Ú©Ø§Ø±ÙØ±Ù…Ø§ÛŒÛŒ ÙØ±ÙˆØ´Ú¯Ø§Ù‡ Ù‡Ø§ÛŒ Ø§ÛŒÙ†ØªØ±Ù†ØªÛŒ Ø´Ù‡Ø± ØªÙ‡Ø±Ø§Ù†(Ú©Ø³Ø¨ Ùˆ Ú©Ø§Ø± Ù‡Ø§ÛŒ Ø§ÛŒÙ†ØªØ±Ù†ØªÛŒ)">
                    </a>
                  </div>
                  <div>
                    <img src="https://trustseal.enamad.ir/logo.aspx?id=99776&amp;p=W5OIimYwhJZbFpaI"
                         class="bg-white"
                         alt=""
                         onclick="window.open(&quot;https://trustseal.enamad.ir/Verify.aspx?id=99776&amp;p=W5OIimYwhJZbFpaI&quot;, &quot;Popup&quot;,&quot;toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30&quot;)"
                         style="cursor:pointer;height: 80px;" id="W5OIimYwhJZbFpaI">
                  </div>
                  <div>
                    <a href="https://195.cra.ir/" target="_blank" rel="nofollow"><img class="bg-white"
                                                                                      style="cursor:pointer;height: 80px"
                                                                                      src="assets/images/195.png"></a>
  
                  </div>
                  <div>
                    <img class="bg-white" id='jxlzwlaojzpewlaosizpapfu' style='cursor:pointer; height: 80px;'
                         onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=147495&p=rfthaodsjyoeaodspfvldshw", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                         alt='logo-samandehi'
                         src='https://logo.samandehi.ir/logo.aspx?id=147495&p=nbpdshwlyndtshwlbsiyujyn'/>
                  </div>
                </li>
                <li>
                  <p class="copyright">
                    â€ŒZitel  (ÙØ±Ø§Ø¨Ø±Ø¯ Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø§ÛŒØ±Ø§Ù†ÛŒØ§Ù†) Ø¯Ø§Ø±Ù†Ø¯Ù‡ Ù¾Ø±ÙˆØ§Ù†Ù‡ Ø§Ù†ØªÙ‚Ø§Ù„ Ø¯Ø§Ø¯Ù‡ Ù…Ø¨ØªÙ†ÛŒ Ø¨Ø± ÙÙ†Ø§ÙˆØ±ÛŒ Ø¨ÛŒâ€ŒØ³ÛŒÙ… (WTTx)  Ø¨Ù‡ Ø´Ù…Ø§Ø±Ù‡ Ù¾Ø±ÙˆØ§Ù†Ù‡ 14-120-100 Ø§Ø² Ø³Ø§Ø²Ù…Ø§Ù† ØªÙ†Ø¸ÛŒÙ… Ù…Ù‚Ø±Ø±Ø§Øª Ùˆ Ø§Ø±ØªØ¨Ø§Ø·Ø§Øª Ø±Ø§Ø¯ÛŒÙˆÛŒÛŒ Ù…ÛŒâ€ŒØ¨Ø§Ø´Ø¯.
                  </p>
                </li>
              </ul>
  
            </div>
          </div>
        </div>
      </div>
      <!--    <div class="hamburger"> <button type="button" class=""> <span></span> <span></span> <span></span> </button> </div>-->
    </nav>
  </header>
      `
    }
  }
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer style="" class="container-fluid footer">
        <div class="container">
          <div class="copy-right">
            â€ŒZitel (ÙØ±Ø§Ø¨Ø±Ø¯ Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø§ÛŒØ±Ø§Ù†ÛŒØ§Ù†) Ø¯Ø§Ø±Ù†Ø¯Ù‡ Ù¾Ø±ÙˆØ§Ù†Ù‡ Ø§Ù†ØªÙ‚Ø§Ù„ Ø¯Ø§Ø¯Ù‡ Ù…Ø¨ØªÙ†ÛŒ Ø¨Ø± ÙÙ†Ø§ÙˆØ±ÛŒ Ø¨ÛŒâ€ŒØ³ÛŒÙ… (WTTx) Ø¨Ù‡ Ø´Ù…Ø§Ø±Ù‡
            Ù¾Ø±ÙˆØ§Ù†Ù‡ 14-120-100 Ø§Ø²
            Ø³Ø§Ø²Ù…Ø§Ù† ØªÙ†Ø¸ÛŒÙ… Ù…Ù‚Ø±Ø±Ø§Øª Ùˆ Ø§Ø±ØªØ¨Ø§Ø·Ø§Øª Ø±Ø§Ø¯ÛŒÙˆÛŒÛŒ Ù…ÛŒâ€ŒØ¨Ø§Ø´Ø¯.
          </div>
        </div>
        </div>
      </footer>
  <div class="about">
    <a class="social-icon" href="https://www.linkedin.com/company/ztel" target="_blank">
      <i class="fab fa-linkedin"></i>
    </a>
    <a class="social-icon" href="https://www.instagram.com/zi.tel/" target="_blank">
      <i class="fab fa-instagram"></i>
    </a>
    <a class="social-icon" href="https://twitter.com/zi_tel" target="_blank">
      <i class="fab fa-twitter"></i>
    </a>
  </div>
  <div class="register-fixed">
    <div class="menu clearfix request-position">
      <a class="menu-link menu-link1" href="registration"><span><i class="fas fa-pencil"></i>Ø¯Ø±Ø®ÙˆØ§Ø³Øª</span></a>
      <a class="menu-link menu-link2" href="registration"><span> <i class="fas fa-pencil"></i>Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ø³Ø±ÙˆÛŒØ³</span></a>
    </div>
  
    <div class="menu clearfix coverage-position">
      <a class="menu-link menu-link1" href="coverage"><span><i class="fas fa-map-marker-alt"></i>Ù…Ù†Ø§Ø·Ù‚</span></a>
      <a class="menu-link menu-link2" href="coverage"><span><i class="fas fa-map-marker-alt"></i>Ù…Ù†Ø§Ø·Ù‚ ØªØ­Øª Ù¾ÙˆØ´Ø´</span></a>
    </div>
  </div>
      `
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);