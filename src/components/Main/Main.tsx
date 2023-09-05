import Aside from "../Aside/Aside.tsx";
import "./styles.module.css";

export default function Main() {
  return (
    <main id="main-container">
      <section className="background-section">
        <main id="title">
          <p id="date">October 5, 2023 at 6:30 pm.</p>
          <p id="name-event">Crypto Cloud Expo</p>
        </main>
      </section>

      <section id="who-are-we">
        <img src="../layout/asset/images/big bitcoin.png" alt="" />

        <h2>who are we</h2>
        <p>
          Crypto Cloud Expo is the blockchain conference network bringing
          together the key players of crypto industry and experts to redefine
          the future of finance. The edition of the Crypto Coin Expo will take
          place during on October 5, 2023 in Dubai, with the world’s top crypto
          companies and blockchain entrepreneurs. Today, UAE, specifically Dubai
          is gearing up to become a global crypto hub. Thus, Crypto Cloud Expo
          will be the gathering in the region on behalf of the world of
          blockchain and cryptocurrency, with a wide range of topics focused on
          the financial technologies of the future, extensive networking
          opportunities and participation from more than 40 countries.
        </p>

        <img src="../layout/asset/images/small bitcoins.png" alt="" />
      </section>

      <section id="discussion-topics">
        <h2>Discussion topics</h2>

        <section className="topics">
          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 1.png" alt="" />

            <section className="text-topic">
              <h3>WHAT WEB 3.0 MEANS FOR ENTERPRISES</h3>
              <p>Sunny Lu</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 2.png" alt="" />

            <section className="text-topic">
              <h3>VALUE CREATION IN THE METAVERSE</h3>
              <p>Gracy Chen</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 3.png" alt="" />

            <section className="text-topic">
              <h3>THE ROLE OF STABLECOINS IN A DECENTRALIZED ECOSYSTEM</h3>
              <p>Nena Dokuzov & Jean Charles Gaudechon</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 4.png" alt="" />

            <section className="text-topic">
              <h3>DAOS: NEW BREED OF INTERNET-NATIVE ORGANIZATIONS</h3>
              <p>Max Kordek</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 5.png" alt="" />

            <section className="text-topic">
              <h3>MAXIMIZING ESG IMPACT WITH BLOCKCHAIN</h3>
              <p>Helen Hai</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 6.png" alt="" />

            <section className="text-topic">
              <h3>BRIDGING DEFI AND CEFI</h3>
              <p>Jason Allegrante</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 7.png" alt="" />

            <section className="text-topic">
              <h3>WEB 3 GAMING: THE NEW FRONTIER?</h3>
              <p>Sunny Lu</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 8.png" alt="" />

            <section className="text-topic">
              <h3>DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS</h3>
              <p>Reece Merrick</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 9.png" alt="" />

            <section className="text-topic">
              <h3>
                CENTRAL BANK DIGITAL CURRENCIES, AND CROSS-BORDER PAYMENTS
              </h3>
              <p>Mohammed Albloosh</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 10.png" alt="" />

            <section className="text-topic">
              <h3>WEB 3: THE FUTURE IS HERE AND NOW</h3>
              <p>Sunny Lu</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 11.png" alt="" />

            <section className="text-topic">
              <h3>NFT MARKET OVERVIEW: TRENDS & OPPORTUNITIES</h3>
              <p>Alex Zinder & Nicole Purin</p>
            </section>
          </article>

          <article className="topic">
            <img src="../layout/asset/images/Cards Topics/card 12.png" alt="" />

            <section className="text-topic">
              <h3>INTEROPERABILITY - CHALLENGES AND OPPORTUNITIES</h3>
              <p>Dina Sam'an</p>
            </section>
          </article>
        </section>
      </section>

      <section id="section-speakers">
        <h2>Speakers</h2>

        <section className="speakers">
          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/1 Sunny-Lu.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Sunny Lu</h3>
              <p>Ve chain</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/2 Helain-Hai.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Helen-Hai</h3>
              <p>Binance</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/3 Alex Zinder.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Alex Zinder</h3>
              <p>Ledger Enterprise</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/4 Gracy Chen.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Gracy chen</h3>
              <p>Bitget</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/5 Mohammed Ablloshi.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Mohammed Ablloshi</h3>
              <p>Dubai International Financial Centre Authority</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/6 Max Kordek.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Max Kordek</h3>
              <p>Lisk</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/7 Nena Dokuzy.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Nena Dokuzy</h3>
              <p>Alserkal Group</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/8 Reece Merrick.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Reece Merrick</h3>
              <p>Ripple</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/9 Dina Sam'an.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Dina Sam'an</h3>
              <p>CoinMENA</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/10 Jean Charles-Gaudechon.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Jean Charles-Gaudechon</h3>
              <p>OneFootball Labs</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/11 Nicole Purin.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Nicole Purin</h3>
              <p>OKX</p>
            </section>
            <div></div>
          </article>

          <article className="speaker">
            <img
              src="../layout/asset/images/Cards speakers/12 Jason Allegrante.png"
              alt=""
            />

            <section className="text-speaker">
              <h3>Jason Allegrante</h3>
              <p>Fireblocks</p>
            </section>
            <div></div>
          </article>
        </section>
      </section>

      <section id="sponsors">
        <h2>Sponsors</h2>

        <section id="logos-sponsors">
          <a href="" className="logo-sponsor">
            <img
              src="../layout/asset/images/sponsors/1)Woodstock Fund.png"
              alt=""
            />
          </a>
          <a href="" className="logo-sponsor">
            <img src="../layout/asset/images/sponsors/2)C3.png" alt="" />
          </a>
          <a href="" className="logo-sponsor">
            <img
              src="../layout/asset/images/sponsors/3)Annex-Investments.png"
              alt=""
            />
          </a>
          <a href="" className="logo-sponsor">
            <img src="../layout/asset/images/sponsors/4)Momentum6.png" alt="" />
          </a>
          <a href="" className="logo-sponsor">
            <img src="../layout/asset/images/sponsors/5)888vc.png" alt="" />
          </a>
          <a href="" className="logo-sponsor">
            <img
              src="../layout/asset/images/sponsors/6)DSA-Investments.png"
              alt=""
            />
          </a>
          <a href="" className="logo-sponsor">
            <img
              src="../layout/asset/images/sponsors/7)Tykhe Block Ventures.png"
              alt=""
            />
          </a>
          <a href="" className="logo-sponsor">
            <img
              src="../layout/asset/images/sponsors/8)18 Ventures.png"
              alt=""
            />
          </a>
        </section>
      </section>

      <Aside />
    </main>
  );
}
