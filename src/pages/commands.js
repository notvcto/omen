import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | OMEN</title>
        <meta
          name="description"
          content="Commands page | Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/omen/favicon.ico/" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              AFK 😴
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/afk help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/afk set</kbd> -{" "}
                  <span className="p-color">Set yourself as AFK</span>
                </li>
                <li>
                  <kbd>/afk list</kbd> -{" "}
                  <span className="p-color">List everyone on AFK status</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Announcements 📢
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/announcement help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/announcement create</kbd> -{" "}
                  <span className="p-color">Create an announcement</span>
                </li>
                <li>
                  <kbd>announcement edit</kbd> -{" "}
                  <span className="p-color">Edit an existing announcement</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Automod 👮‍♂️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/automod help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/automod antiinvite</kbd> -{" "}
                  <span className="p-color">
                    Enable/disable the anti invite system
                  </span>
                </li>
                <li>
                  <kbd>/automod antilinks</kbd> -{" "}
                  <span className="p-color">
                    Enable/disable the anti links system
                  </span>
                </li>
                <li>
                  <kbd>/automod antispam</kbd> -{" "}
                  <span className="p-color">
                    Enable/disable the anti spam system
                  </span>
                </li>
                <li>
                  <kbd>/automod linkschannel</kbd> -{" "}
                  <span className="p-color">
                    Add a channel to the anti link whitelist
                  </span>
                </li>
                <li>
                  <kbd>/automod blacklist display</kbd> -{" "}
                  <span className="p-color">Show the whole word blacklist</span>
                </li>
                <li>
                  <kbd>/automod blacklist add</kbd> -{" "}
                  <span className="p-color">Add a word to the blacklist</span>
                </li>
                <li>
                  <kbd>/automod blacklist remove</kbd> -{" "}
                  <span className="p-color">
                    Remove a word from the blacklist
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Auto setup ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/autosetup help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/autosetup logs</kbd> -{" "}
                  <span className="p-color">
                    Automatically set up logs for the server
                  </span>
                </li>
                <li>
                  <kbd>/autosetup fun</kbd> -{" "}
                  <span className="p-color">
                    Automatically set up a fun channel for the server
                  </span>
                </li>
                <li>
                  <kbd>/autosetup games</kbd> -{" "}
                  <span className="p-color">
                    Automatically set up a games channel for the server
                  </span>
                </li>
                <li>
                  <kbd>/autosetup welcome</kbd> -{" "}
                  <span className="p-color">
                    Automatically set up a welcome/leave channel for the server
                  </span>
                </li>
                <li>
                  <kbd>/autosetup customvoice</kbd> -{" "}
                  <span className="p-color">
                    Automatically set up a custom voice channel for the server
                  </span>
                </li>
                <li>
                  <kbd>/autosetup ticketpanel</kbd> -{" "}
                  <span className="p-color">
                    Automatically set up the ticketing system for the server
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Birthdays 🎂
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/birthdays help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/birthdays check</kbd> -{" "}
                  <span className="p-color">Check your birthday</span>
                </li>
                <li>
                  <kbd>/birthdays delete</kbd> -{" "}
                  <span className="p-color">Delete your birthday</span>
                </li>
                <li>
                  <kbd>/birthdays list</kbd> -{" "}
                  <span className="p-color">See everyone's birthdays</span>
                </li>
                <li>
                  <kbd>/birthdays set</kbd> -{" "}
                  <span className="p-color">Set your birthday</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
              Bot information 🤖
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/bot help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/bot info</kbd> -{" "}
                  <span className="p-color">
                    Display information about the bot
                  </span>
                </li>
                <li>
                  <kbd>/bot ping</kbd> -{" "}
                  <span className="p-color">Display bot's ping</span>
                </li>
                <li>
                  <kbd>/bot changelogs</kbd> -{" "}
                  <span className="p-color">Display the bot's changelogs</span>
                </li>
                <li>
                  <kbd>/bot links</kbd> -{" "}
                  <span className="p-color">
                    Display all of the bot's links
                  </span>
                </li>
                <li>
                  <kbd>/bot socials</kbd> -{" "}
                  <span className="p-color">Display the bot's socials</span>
                </li>
                <li>
                  <kbd>/bot support</kbd> -{" "}
                  <span className="p-color">
                    Get an invite for the support server
                  </span>
                </li>
                <li>
                  <kbd>/bot uptime</kbd> -{" "}
                  <span className="p-color">Display bot uptime</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb7" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb7">
              Casino 🎰
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/casino help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/casino blackjack</kbd> -{" "}
                  <span className="p-color">Play Blackjack</span>
                </li>
                <li>
                  <kbd>/casino crash</kbd> -{" "}
                  <span className="p-color">
                    More risk, more reward, play Crash
                  </span>
                </li>
                <li>
                  <kbd>/casino roulette</kbd> -{" "}
                  <span className="p-color">1 MIL ON RED! Play Roulette</span>
                </li>
                <li>
                  <kbd>/casino slots</kbd> -{" "}
                  <span className="p-color">Play Slots</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb8" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb8">
              Configuration ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/config help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/config levels</kbd> -{" "}
                  <span className="p-color">
                    Enable/disable the leveling system
                  </span>
                </li>
                <li>
                  <kbd>/config setcolor</kbd> -{" "}
                  <span className="p-color">Set a custom embed color</span>
                </li>
                <li>
                  <kbd>/config setverify</kbd> -{" "}
                  <span className="p-color">Set up the verify channel</span>
                </li>
                <li>
                  <kbd>/config setchannelname</kbd> -{" "}
                  <span className="p-color">
                    Set a custom channel name for the server stats system
                  </span>
                </li>
                <li>
                  <kbd>/config levelmessage</kbd> -{" "}
                  <span className="p-color">Set a custom level up message</span>
                </li>
                <li>
                  <kbd>/config welcomemessage</kbd> -{" "}
                  <span className="p-color">Set a custom welcome message</span>
                </li>
                <li>
                  <kbd>/config leavemessage</kbd> -{" "}
                  <span className="p-color">Set a custom leave message</span>
                </li>
                <li>
                  <kbd>/config ticketmessage</kbd> -{" "}
                  <span className="p-color">Set a custom ticket message</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb9" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb9">
              Custom commands 💻
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/custom commands help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/custom-commands add</kbd> -{" "}
                  <span className="p-color">Add a custom command</span>
                </li>
                <li>
                  <kbd>/custom-commands delete</kbd> -{" "}
                  <span className="p-color">Delete a custom command</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb10" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb10">
              Developers 💳
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/developers help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/developers eval</kbd> -{" "}
                  <span className="p-color">
                    Get the results for a piece of code
                  </span>
                </li>
                <li>
                  <kbd>/developers badge</kbd> -{" "}
                  <span className="p-color">Manage bot badges</span>
                </li>
                <li>
                  <kbd>/developers ban</kbd> -{" "}
                  <span className="p-color">Manage bot bans</span>
                </li>
                <li>
                  <kbd>/developers credits</kbd> -{" "}
                  <span className="p-color">Manage the bot's economy</span>
                </li>
                <li>
                  <kbd>/developers args</kbd> -{" "}
                  <span className="p-color">Post preset messages</span>
                </li>
                <li>
                  <kbd>/developers servers</kbd> -{" "}
                  <span className="p-color">
                    See all servers from this shard
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb11" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb11">
              Economy 💰
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/economy help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/economy additem</kbd> -{" "}
                  <span className="p-color">
                    Add a role to the economy shop
                  </span>
                </li>
                <li>
                  <kbd>/economy addmoney</kbd> -{" "}
                  <span className="p-color">Add money to a user</span>
                </li>
                <li>
                  <kbd>/economy balance</kbd> -{" "}
                  <span className="p-color">Display your balance</span>
                </li>
                <li>
                  <kbd>/economy beg</kbd> -{" "}
                  <span className="p-color">Beg for money</span>
                </li>
                <li>
                  <kbd>/economy buy</kbd> -{" "}
                  <span className="p-color">
                    Buy items in the economy store
                  </span>
                </li>
                <li>
                  <kbd>/economy clear</kbd> -{" "}
                  <span className="p-color">
                    Clear the economy for the server
                  </span>
                </li>
                <li>
                  <kbd>/economy crime</kbd> -{" "}
                  <span className="p-color">Commit a crime</span>
                </li>
                <li>
                  <kbd>/economy daily</kbd> -{" "}
                  <span className="p-color">Claim a daily bonus</span>
                </li>
                <li>
                  <kbd>/economy deleteitem</kbd> -{" "}
                  <span className="p-color">
                    Delete an item from the economy shop
                  </span>
                </li>
                <li>
                  <kbd>/economy deposit</kbd> -{" "}
                  <span className="p-color">Deposit money to your bank</span>
                </li>
                <li>
                  <kbd>/economy fish</kbd> -{" "}
                  <span className="p-color">Go fishing</span>
                </li>
                <li>
                  <kbd>/economy hourly</kbd> -{" "}
                  <span className="p-color">Claim an hourly bonus</span>
                </li>
                <li>
                  <kbd>/economy hunt</kbd> -{" "}
                  <span className="p-color">Go hunting</span>
                </li>
                <li>
                  <kbd>/economy monthly</kbd> -{" "}
                  <span className="p-color">Claim a monthly bonus</span>
                </li>
                <li>
                  <kbd>/economy pay</kbd> -{" "}
                  <span className="p-color">Pay a user some money</span>
                </li>
                <li>
                  <kbd>/economy present</kbd> -{" "}
                  <span className="p-color">Get a weekly present</span>
                </li>
                <li>
                  <kbd>/economy removemoney</kbd> -{" "}
                  <span className="p-color">Remove money from a user</span>
                </li>
                <li>
                  <kbd>/economy rob</kbd> -{" "}
                  <span className="p-color">Rob money from a user</span>
                </li>
                <li>
                  <kbd>/economy store</kbd> -{" "}
                  <span className="p-color">Display the economy store</span>
                </li>
                <li>
                  <kbd>/economy weekly</kbd> -{" "}
                  <span className="p-color">Claim a weekly bonus</span>
                </li>
                <li>
                  <kbd>/economy withdraw</kbd> -{" "}
                  <span className="p-color">Withdraw money from your bank</span>
                </li>
                <li>
                  <kbd>/economy work</kbd> -{" "}
                  <span className="p-color">Work for money</span>
                </li>
                <li>
                  <kbd>/economy yearly</kbd> -{" "}
                  <span className="p-color">Claim a yearly bonus</span>
                </li>
                <li>
                  <kbd>/economy leaderboard</kbd> -{" "}
                  <span className="p-color">
                    Display the economy leaderboard
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb12" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb12">
              Family 👪
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/family help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/family adopt</kbd> -{" "}
                  <span className="p-color">Adopt a member</span>
                </li>
                <li>
                  <kbd>/family delete</kbd> -{" "}
                  <span className="p-color">Delete your family</span>
                </li>
                <li>
                  <kbd>/family disown</kbd> -{" "}
                  <span className="p-color">
                    Disown one of your children or a parent
                  </span>
                </li>
                <li>
                  <kbd>/family divorce</kbd> -{" "}
                  <span className="p-color">Divorce your partner</span>
                </li>
                <li>
                  <kbd>/family</kbd> -{" "}
                  <span className="p-color">
                    Display if a user is in a family or not
                  </span>
                </li>
                <li>
                  <kbd>/family propose</kbd> -{" "}
                  <span className="p-color">Marry a member</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb13" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb13">
              Fun 😂
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/fun help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/fun meme confused</kbd> -{" "}
                  <span className="p-color">Confused Nick Young meme</span>
                </li>
                <li>
                  <kbd>/fun meme cleverrate</kbd> -{" "}
                  <span className="p-color">See how clever you are</span>
                </li>
                <li>
                  <kbd>/fun meme dinochrome</kbd> -{" "}
                  <span className="p-color">Dinosaur in Chrome</span>
                </li>
                <li>
                  <kbd>/fun meme epicgamerrate</kbd> -{" "}
                  <span className="p-color">
                    See how much of an epic gamer you are
                  </span>
                </li>
                <li>
                  <kbd>/fun meme howgay</kbd> -{" "}
                  <span className="p-color">See how queer you are</span>
                </li>
                <li>
                  <kbd>/fun meme roast</kbd> -{" "}
                  <span className="p-color">Roast a user</span>
                </li>
                <li>
                  <kbd>/fun meme simprate</kbd> -{" "}
                  <span className="p-color">
                    See how much of a simp you are
                  </span>
                </li>
                <li>
                  <kbd>/fun meme stankrate</kbd> -{" "}
                  <span className="p-color">See how much you stank</span>
                </li>
                <li>
                  <kbd>/fun meme rickroll</kbd> -{" "}
                  <span className="p-color">Get a rickroll</span>
                </li>
                <li>
                  <kbd>/fun user hack</kbd> -{" "}
                  <span className="p-color">Hack a user</span>
                </li>
                <li>
                  <kbd>/fun user hug</kbd> -{" "}
                  <span className="p-color">Hug a user</span>
                </li>
                <li>
                  <kbd>/fun user kill</kbd> -{" "}
                  <span className="p-color">Kill a user</span>
                </li>
                <li>
                  <kbd>/fun user lovemeter</kbd> -{" "}
                  <span className="p-color">
                    See how compatible you are with someone
                  </span>
                </li>
                <li>
                  <kbd>$/fun user sudo</kbd> -{" "}
                  <span className="p-color">
                    Say something like someone else
                  </span>
                </li>
                <li>
                  <kbd>/fun text ascii</kbd> -{" "}
                  <span className="p-color">Create ASCII art on the go</span>
                </li>
                <li>
                  <kbd>/fun text gif</kbd> -{" "}
                  <span className="p-color">Search for a gif</span>
                </li>
                <li>
                  <kbd>/fun text reverse</kbd> -{" "}
                  <span className="p-color">Reverse your text</span>
                </li>
                <li>
                  <kbd>/fun text say</kbd> -{" "}
                  <span className="p-color">Make the bot say something</span>
                </li>
                <li>
                  <kbd>/fun extra birdfact</kbd> -{" "}
                  <span className="p-color">Display a random bird fact</span>
                </li>
                <li>
                  <kbd>/fun extra catfact</kbd> -{" "}
                  <span className="p-color">Display a random cat fact</span>
                </li>
                <li>
                  <kbd>/fun extra dogfact</kbd> -{" "}
                  <span className="p-color">Display a random dog fact</span>
                </li>
                <li>
                  <kbd>/fun extra fact</kbd> -{" "}
                  <span className="p-color">Display a random fact</span>
                </li>
                <li>
                  <kbd>/fun extra koalafact</kbd> -{" "}
                  <span className="p-color">Display a random koala fact</span>
                </li>
                <li>
                  <kbd>/fun extra pandafact</kbd> -{" "}
                  <span className="p-color">Display a random panda fact</span>
                </li>
                <li>
                  <kbd>/fun extra token</kbd> -{" "}
                  <span className="p-color">Get bot's token</span>
                </li>
                <li>
                  <kbd>/fun extra worldclock</kbd> -{" "}
                  <span className="p-color">
                    Display different timezones around the world
                  </span>
                </li>
                <li>
                  <kbd>/fun extra xmas</kbd> -{" "}
                  <span className="p-color">
                    Display how much time left until Christmas
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb14" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb14">
              Games 🎮
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/games help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/games 8ball</kbd> -{" "}
                  <span className="p-color">Ask the 8ball a question</span>
                </li>
                <li>
                  <kbd>/games fasttype</kbd> -{" "}
                  <span className="p-color">Learn how to type faster</span>
                </li>
                <li>
                  <kbd>/games music-trivia</kbd> -{" "}
                  <span className="p-color">Play music trivia</span>
                </li>
                <li>
                  <kbd>/games roll</kbd> -{" "}
                  <span className="p-color">Roll a die</span>
                </li>
                <li>
                  <kbd>/games rps</kbd> -{" "}
                  <span className="p-color">Play rock paper scissors</span>
                </li>
                <li>
                  <kbd>/games skipword</kbd> -{" "}
                  <span className="p-color">Skip the current word</span>
                </li>
                <li>
                  <kbd>/games snake</kbd> -{" "}
                  <span className="p-color">Play the game snake</span>
                </li>
                <li>
                  <kbd>/games trivia</kbd> -{" "}
                  <span className="p-color">Play Trivia</span>
                </li>
                <li>
                  <kbd>/games willyoupressthebutton</kbd> -{" "}
                  <span className="p-color">
                    Play would you press the button
                  </span>
                </li>
                <li>
                  <kbd>/games wouldyourather</kbd> -{" "}
                  <span className="p-color">Play would you rather</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb15" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb15">
              Giveaways 🥳
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/giveaway help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/giveaway start</kbd> -{" "}
                  <span className="p-color">Start a giveaway</span>
                </li>
                <li>
                  <kbd>/giveaway drop</kbd> -{" "}
                  <span className="p-color">Start a drop giveaway</span>
                </li>
                <li>
                  <kbd>/giveaway reroll</kbd> -{" "}
                  <span className="p-color">Reroll a specified giveaway</span>
                </li>
                <li>
                  <kbd>/giveaway end</kbd> -{" "}
                  <span className="p-color">End a specified giveaway</span>
                </li>
                <li>
                  <kbd>/giveaway edit</kbd> -{" "}
                  <span className="p-color">Edit a specified giveaway</span>
                </li>
                <li>
                  <kbd>/giveaway delete</kbd> -{" "}
                  <span className="p-color">Delete a specified giveaway</span>
                </li>
                <li>
                  <kbd>/giveaway pause</kbd> -{" "}
                  <span className="p-color">Pause a specified giveaway</span>
                </li>
                <li>
                  <kbd>/giveaway unpause</kbd> -{" "}
                  <span className="p-color">Resume a specified giveaway</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb16" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb16">
              Guild information ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/guild help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/guild channelinfo</kbd> -{" "}
                  <span className="p-color">
                    Display a channel's information
                  </span>
                </li>
                <li>
                  <kbd>/guild members</kbd> -{" "}
                  <span className="p-color">Display guild members</span>
                </li>
                <li>
                  <kbd>/guild oldestmember</kbd> -{" "}
                  <span className="p-color">
                    Display the guild's oldest member
                  </span>
                </li>
                <li>
                  <kbd>/guild roleinfo</kbd> -{" "}
                  <span className="p-color">Display a role's information</span>
                </li>
                <li>
                  <kbd>/guild info</kbd> -{" "}
                  <span className="p-color">Display guild information</span>
                </li>
                <li>
                  <kbd>/guild stealemoji</kbd> -{" "}
                  <span className="p-color">Steal an emoji from a guild</span>
                </li>
                <li>
                  <kbd>/guild youngestmember</kbd> -{" "}
                  <span className="p-color">
                    Display youngest member from the guild
                  </span>
                </li>
                <li>
                  <kbd>/guild userinfo</kbd> -{" "}
                  <span className="p-color">Display a user's information</span>
                </li>
                <li>
                  <kbd>/guild inviteinfo</kbd> -{" "}
                  <span className="p-color">
                    Display invite information for the guild
                  </span>
                </li>
                <li>
                  <kbd>/guild emojis</kbd> -{" "}
                  <span className="p-color">
                    Display all emojis on the guild
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb17" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb17">
              Images 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/images help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/images memes clyde</kbd> -{" "}
                  <span className="p-color">Create a custom Clyde message</span>
                </li>
                <li>
                  <kbd>/images memes drake</kbd> -{" "}
                  <span className="p-color">Create a drake meme</span>
                </li>
                <li>
                  <kbd>/images memes meme</kbd> -{" "}
                  <span className="p-color">Display a random meme</span>
                </li>
                <li>
                  <kbd>/images memes pooh</kbd> -{" "}
                  <span className="p-color">Create a winnie the pooh meme</span>
                </li>
                <li>
                  <kbd>/images memes trumptweet</kbd> -{" "}
                  <span className="p-color">
                    Create a custom Donald Trump tweet
                  </span>
                </li>
                <li>
                  <kbd>/images memes tweet</kbd> -{" "}
                  <span className="p-color">Tweet something</span>
                </li>
                <li>
                  <kbd>/images memes wasted</kbd> -{" "}
                  <span className="p-color">Create a wasted meme</span>
                </li>
                <li>
                  <kbd>/images animals bird</kbd> -{" "}
                  <span className="p-color">
                    Display a random image of a bird
                  </span>
                </li>
                <li>
                  <kbd>/images anmals cat</kbd> -{" "}
                  <span className="p-color">
                    Display a random image of a cat
                  </span>
                </li>
                <li>
                  <kbd>/images animals dog</kbd> -{" "}
                  <span className="p-color">
                    Display a random image of a dog
                  </span>
                </li>
                <li>
                  <kbd>/images animals fox</kbd> -{" "}
                  <span className="p-color">
                    Display a rarndom image of a fox
                  </span>
                </li>
                <li>
                  <kbd>/images animals koala</kbd> -{" "}
                  <span className="p-color">
                    Display a random image of a fox
                  </span>
                </li>
                <li>
                  <kbd>/images animals panda</kbd> -{" "}
                  <span className="p-color">
                    Display a random image of a panda
                  </span>
                </li>
                <li>
                  <kbd>/images animals redpanda</kbd> -{" "}
                  <span className="p-color">
                    Display a random image of a red panda (I swear they're
                    different!!!!!!)
                  </span>
                </li>
                <li>
                  <kbd>/images user ad</kbd> -{" "}
                  <span className="p-color">Generate an ad</span>
                </li>
                <li>
                  <kbd>/images user avatar</kbd> -{" "}
                  <span className="p-color">Display a user's avatar</span>
                </li>
                <li>
                  <kbd>/images user banner</kbd> -{" "}
                  <span className="p-color">Display a user's banner</span>
                </li>
                <li>
                  <kbd>/images user bed</kbd> -{" "}
                  <span className="p-color">Display a user in bed</span>
                </li>
                <li>
                  <kbd>/images user blur</kbd> -{" "}
                  <span className="p-color">Blur a user's image</span>
                </li>
                <li>
                  <kbd>/images user burn</kbd> -{" "}
                  <span className="p-color">Burn a user's image</span>
                </li>
                <li>
                  <kbd>/images user clown</kbd> -{" "}
                  <span className="p-color">Turn a user into a clown</span>
                </li>
                <li>
                  <kbd>/images user colorify</kbd> -{" "}
                  <span className="p-color">Add more color to an image</span>
                </li>
                <li>
                  <kbd>/images user darkness</kbd> -{" "}
                  <span className="p-color">Darken a user's avatar</span>
                </li>
                <li>
                  <kbd>/images user facepalm</kbd> -{" "}
                  <span className="p-color">Make a user facepalm</span>
                </li>
                <li>
                  <kbd>/images user greyscale</kbd> -{" "}
                  <span className="p-color">
                    Make a user's avatar greyscale
                  </span>
                </li>
                <li>
                  <kbd>/images user invert</kbd> -{" "}
                  <span className="p-color">Invert a user's avatar</span>
                </li>
                <li>
                  <kbd>/images user kiss</kbd> -{" "}
                  <span className="p-color">Make a user kiss</span>
                </li>
                <li>
                  <kbd>/images user podium</kbd> -{" "}
                  <span className="p-color">Put a user on a podium</span>
                </li>
                <li>
                  <kbd>/images user spank</kbd> -{" "}
                  <span className="p-color">Spank a user</span>
                </li>
                <li>
                  <kbd>/images user wanted</kbd> -{" "}
                  <span className="p-color">
                    Turn a user into a wanted person
                  </span>
                </li>
                <li>
                  <kbd>/images extra car</kbd> -{" "}
                  <span className="p-color">Display a random car</span>
                </li>
                <li>
                  <kbd>/images extra glass</kbd> -{" "}
                  <span className="p-color">
                    Overlay a glass texture on an image
                  </span>
                </li>
                <li>
                  <kbd>/images extra image</kbd> -{" "}
                  <span className="p-color">Show an image in an embed</span>
                </li>
                <li>
                  <kbd>/images extra triggered</kbd> -{" "}
                  <span className="p-color">Trigger yourself</span>
                </li>
                <li>
                  <kbd>/images extra wallpaper</kbd> -{" "}
                  <span className="p-color">Returns a random wallpaper</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb18" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb18">
              Invites 📨
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/invites help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/invites add</kbd> -{" "}
                  <span className="p-color">
                    Add invites to a specified user
                  </span>
                </li>
                <li>
                  <kbd>/invites remove</kbd> -{" "}
                  <span className="p-color">
                    Remove invites from a specified user
                  </span>
                </li>
                <li>
                  <kbd>/invites show</kbd> -{" "}
                  <span className="p-color">Display your invites</span>
                </li>
                <li>
                  <kbd>/invites leaderboard</kbd> -{" "}
                  <span className="p-color">
                    Display the invites leaderboard for the guild
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb19" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb19">
              Leveling 🆙
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/levels help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/levels setlevel</kbd> -{" "}
                  <span className="p-color">Set a users level</span>
                </li>
                <li>
                  <kbd>/levels deletereward</kbd> -{" "}
                  <span className="p-color">Remove level reward</span>
                </li>
                <li>
                  <kbd>/levels createreward</kbd> -{" "}
                  <span className="p-color">Create level reward</span>
                </li>
                <li>
                  <kbd>/levels setxp</kbd> -{" "}
                  <span className="p-color">Set a user's XP</span>
                </li>
                <li>
                  <kbd>/levels rank</kbd> -{" "}
                  <span className="p-color">
                    Display your level rank on the leaderboard
                  </span>
                </li>
                <li>
                  <kbd>/levels rewards</kbd> -{" "}
                  <span className="p-color">Display all leveling rewards</span>
                </li>
                <li>
                  <kbd>/levels leaderboard</kbd> -{" "}
                  <span className="p-color">
                    Display the server's level leaderboard
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb20" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb20">
              Messages 💬
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/messages help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/messages add</kbd> -{" "}
                  <span className="p-color">Add messages to a user</span>
                </li>
                <li>
                  <kbd>/messages deletereward</kbd> -{" "}
                  <span className="p-color">Remove messages reward</span>
                </li>
                <li>
                  <kbd>/messages createreward</kbd> -{" "}
                  <span className="p-color">Create messages reward</span>
                </li>
                <li>
                  <kbd>/messages remove</kbd> -{" "}
                  <span className="p-color">Remove messages from a user</span>
                </li>
                <li>
                  <kbd>/messages show</kbd> -{" "}
                  <span className="p-color">Display your messages</span>
                </li>
                <li>
                  <kbd>/messages rewards</kbd> -{" "}
                  <span className="p-color">Display your messages</span>
                </li>
                <li>
                  <kbd>/messages leaderboard</kbd> -{" "}
                  <span className="p-color">
                    Display messages leaderboard for the guild
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb21" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb21">
              Moderation 👔
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/moderation help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/moderation ban</kbd> -{" "}
                  <span className="p-color">Ban a specified user</span>
                </li>
                <li>
                  <kbd>/moderation clear</kbd> -{" "}
                  <span className="p-color">
                    Delete a specified amount of messages
                  </span>
                </li>
                <li>
                  <kbd>/moderation clearuser</kbd> -{" "}
                  <span className="p-color">
                    Delete a specified amount of messages from a specified user
                  </span>
                </li>
                <li>
                  <kbd>/moderation demote</kbd> -{" "}
                  <span className="p-color">Demote a specified user</span>
                </li>
                <li>
                  <kbd>/moderation kick</kbd> -{" "}
                  <span className="p-color">Kick a speciified user</span>
                </li>
                <li>
                  <kbd>/moderation lock</kbd> -{" "}
                  <span className="p-color">Lock a channel</span>
                </li>
                <li>
                  <kbd>/moderation lockdown</kbd> -{" "}
                  <span className="p-color">Lock the whole server down</span>
                </li>
                <li>
                  <kbd>/moderation nuke</kbd> -{" "}
                  <span className="p-color">Nuke a specified channel</span>
                </li>
                <li>
                  <kbd>/moderation softban</kbd> -{" "}
                  <span className="p-color">Soft ban a specified user</span>
                </li>
                <li>
                  <kbd>/moderation timeout</kbd> -{" "}
                  <span className="p-color">Time out a specified user</span>
                </li>
                <li>
                  <kbd>/moderation tempban</kbd> -{" "}
                  <span className="p-color">
                    Temporarily ban a specified user
                  </span>
                </li>
                <li>
                  <kbd>/moderation unlock</kbd> -{" "}
                  <span className="p-color">Unlock a specified channel</span>
                </li>
                <li>
                  <kbd>/moderation unban</kbd> -{" "}
                  <span className="p-color">Unban a specified user</span>
                </li>
                <li>
                  <kbd>/moderation banlist</kbd> -{" "}
                  <span className="p-color">
                    Display all the people that have been banned from the server
                  </span>
                </li>
                <li>
                  <kbd>/moderation warn</kbd> -{" "}
                  <span className="p-color">Warn a specified user</span>
                </li>
                <li>
                  <kbd>/moderation unwarn</kbd> -{" "}
                  <span className="p-color">
                    Remove a warning from a specified user
                  </span>
                </li>
                <li>
                  <kbd>/moderation warnings</kbd> -{" "}
                  <span className="p-color">Display warnings for a user</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb22" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb22">
              Music 🎶
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/music help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/music bassboost</kbd> -{" "}
                  <span className="p-color">
                    ALL THE BASS!!! Boost bass on the currently playing song
                  </span>
                </li>
                <li>
                  <kbd>/music play</kbd> -{" "}
                  <span className="p-color">Play a specified song</span>
                </li>
                <li>
                  <kbd>/music clear</kbd> -{" "}
                  <span className="p-color">Clear the song queue</span>
                </li>
                <li>
                  <kbd>/music loop</kbd> -{" "}
                  <span className="p-color">Loop the current song/queue</span>
                </li>
                <li>
                  <kbd>/music lyrics</kbd> -{" "}
                  <span className="p-color">
                    Display lyrics for the currently playing song
                  </span>
                </li>
                <li>
                  <kbd>/music playing</kbd> -{" "}
                  <span className="p-color">
                    Display the currently playing song
                  </span>
                </li>
                <li>
                  <kbd>/music pause</kbd> -{" "}
                  <span className="p-color">
                    Pause the currently playing song
                  </span>
                </li>
                <li>
                  <kbd>/music previous</kbd> -{" "}
                  <span className="p-color">
                    Play the preivously played song
                  </span>
                </li>
                <li>
                  <kbd>/music queue</kbd> -{" "}
                  <span className="p-color">Display the music queue</span>
                </li>
                <li>
                  <kbd>/music resume</kbd> -{" "}
                  <span className="p-color">
                    Resume a previously paused song
                  </span>
                </li>
                <li>
                  <kbd>/music remove</kbd> -{" "}
                  <span className="p-color">Remove a song from the queue</span>
                </li>
                <li>
                  <kbd>/music seek</kbd> -{" "}
                  <span className="p-color">
                    Seek the timeline in the currently playing song
                  </span>
                </li>
                <li>
                  <kbd>/music shuffle</kbd> -{" "}
                  <span className="p-color">Shuffle the song queue</span>
                </li>
                <li>
                  <kbd>/music skip</kbd> -{" "}
                  <span className="p-color">
                    Skip the currently playing song
                  </span>
                </li>
                <li>
                  <kbd>/music skipto</kbd> -{" "}
                  <span className="p-color">
                    Skip to another song in the queue
                  </span>
                </li>
                <li>
                  <kbd>/music stop</kbd> -{" "}
                  <span className="p-color">
                    Stop playing music and make the bot leave the channel
                  </span>
                </li>
                <li>
                  <kbd>/music volume</kbd> -{" "}
                  <span className="p-color">
                    Adjust the volume for the currently playing song
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb23" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb23">
              Notepad 📓
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/notepad help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/notepad add</kbd> -{" "}
                  <span className="p-color">Add a note to your notepad</span>
                </li>
                <li>
                  <kbd>/notepad delete</kbd> -{" "}
                  <span className="p-color">
                    Delete a note from your notepad
                  </span>
                </li>
                <li>
                  <kbd>/notepad edit</kbd> -{" "}
                  <span className="p-color">Edit a note from your notepad</span>
                </li>
                <li>
                  <kbd>/notepad notes</kbd> -{" "}
                  <span className="p-color">Show all your notes</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb24" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb24">
              Profile 👤
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/profile help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/profile create</kbd> -{" "}
                  <span className="p-color">Create your profile</span>
                </li>
                <li>
                  <kbd>/profile delete</kbd> -{" "}
                  <span className="p-color">Delete your profile</span>
                </li>
                <li>
                  <kbd>/profile profile</kbd> -{" "}
                  <span className="p-color">Display your profile</span>
                </li>
                <li>
                  <kbd>/profile aboutme</kbd> -{" "}
                  <span className="p-color">
                    Add an about me to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile age</kbd> -{" "}
                  <span className="p-color">Add your age to your profile</span>
                </li>
                <li>
                  <kbd>/profile bday</kbd> -{" "}
                  <span className="p-color">
                    Add your birthday to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile color</kbd> -{" "}
                  <span className="p-color">
                    Change the embed color for your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile gender</kbd> -{" "}
                  <span className="p-color">
                    Add your gender to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile origin</kbd> -{" "}
                  <span className="p-color">
                    Add your country of origin to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile status</kbd> -{" "}
                  <span className="p-color">
                    Set your status on your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile actor addactor</kbd> -{" "}
                  <span className="p-color"></span>
                </li>
                <li>
                  <kbd>/profile actor delactor</kbd> -{" "}
                  <span className="p-color">
                    Remove one of your favorite actors from your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile artist addartiist</kbd> -{" "}
                  <span className="p-color">
                    Add one of your favorite artists to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile artist delartist</kbd> -{" "}
                  <span className="p-color">
                    Remove one of your favorite artists from your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile food addfood</kbd> -{" "}
                  <span className="p-color">
                    Add one of your favorite foods to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile food delfood</kbd> -{" "}
                  <span className="p-color">
                    Remove one of your favorite foods from your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile movie addmovie</kbd> -{" "}
                  <span className="p-color">
                    Add one of your favorite movies to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile movie delmovie</kbd> -{" "}
                  <span className="p-color">
                    Remove one of your favorite movies from your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile pet addpet</kbd> -{" "}
                  <span className="p-color">Add your pet to your profile</span>
                </li>
                <li>
                  <kbd>/profile pet delpet</kbd> -{" "}
                  <span className="p-color">
                    Remove your pet from your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile song addsong</kbd> -{" "}
                  <span className="p-color">
                    Add one of your favorite songs to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile song delsong</kbd> -{" "}
                  <span className="p-color">
                    Remove one of your favorite songs from your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile hobbies addhobby</kbd> -{" "}
                  <span className="p-color">
                    Add one of your hobbies to your profile
                  </span>
                </li>
                <li>
                  <kbd>/profile hobbies delhobby</kbd> -{" "}
                  <span className="p-color">
                    Remove one of your hobbies from your profile
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb25" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb25">
              Radio 📻
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/radio help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/radio play</kbd> -{" "}
                  <span className="p-color">Start the radio</span>
                </li>
                <li>
                  <kbd>/radop stop</kbd> -{" "}
                  <span className="p-color">Stop the radio</span>
                </li>
                <li>
                  <kbd>/radio playing</kbd> -{" "}
                  <span className="p-color">
                    Display what is currently playing
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb26" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb26">
              Reaction roles 😛
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/reactionroles help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/reactionroles add</kbd> -{" "}
                  <span className="p-color">Add a reaction role</span>
                </li>
                <li>
                  <kbd>/reactionroles delete</kbd> -{" "}
                  <span className="p-color">
                    Remove a reaction roles category
                  </span>
                </li>
                <li>
                  <kbd>/reactionroles list</kbd> -{" "}
                  <span className="p-color">
                    Show a list of all reaction role categories
                  </span>
                </li>
                <li>
                  <kbd>/reactionroles button</kbd> -{" "}
                  <span className="p-color">
                    Show all reaction roles with buttons
                  </span>
                </li>
                <li>
                  <kbd>/reactionroles menu</kbd> -{" "}
                  <span className="p-color">
                    Show all reaction roles in a menu
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb27" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb27">
              Search 🔎
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/search help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/search bing</kbd> -{" "}
                  <span className="p-color">Search something in Bing</span>
                </li>
                <li>
                  <kbd>/search ddg</kbd> -{" "}
                  <span className="p-color">
                    Search something in DuckDuckGo
                  </span>
                </li>
                <li>
                  <kbd>/search google</kbd> -{" "}
                  <span className="p-color">Search something in Google</span>
                </li>
                <li>
                  <kbd>/search youtube</kbd> -{" "}
                  <span className="p-color">Search something on YouTube</span>
                </li>
                <li>
                  <kbd>/search corona</kbd> -{" "}
                  <span className="p-color">
                    Search a specific country for COVID stats
                  </span>
                </li>
                <li>
                  <kbd>/search crypto</kbd> -{" "}
                  <span className="p-color">
                    Get information on a cryptocurrency
                  </span>
                </li>
                <li>
                  <kbd>/search docs</kbd> -{" "}
                  <span className="p-color">
                    Search something in the Discord.JS docs
                  </span>
                </li>
                <li>
                  <kbd>/search github</kbd> -{" "}
                  <span className="p-color">Search something in GitHub</span>
                </li>
                <li>
                  <kbd>/search hexcolour</kbd> -{" "}
                  <span className="p-color">
                    Get information on a hex value
                  </span>
                </li>
                <li>
                  <kbd>/search itunes</kbd> -{" "}
                  <span className="p-color">Search something in iTunes</span>
                </li>
                <li>
                  <kbd>/search npm</kbd> -{" "}
                  <span className="p-color">
                    Get information on an NPM package
                  </span>
                </li>
                <li>
                  <kbd>/search steam</kbd> -{" "}
                  <span className="p-color">Search something in Steam</span>
                </li>
                <li>
                  <kbd>/search translate</kbd> -{" "}
                  <span className="p-color">Translate some text</span>
                </li>
                <li>
                  <kbd>/search weather</kbd> -{" "}
                  <span className="p-color">Check the current weather</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb28" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb28">
              Server stats 📊
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/serverstats help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/serverstats boosts</kbd> -{" "}
                  <span className="p-color">Keep track of server boosts</span>
                </li>
                <li>
                  <kbd>/serverstats tier</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the server boost level
                  </span>
                </li>
                <li>
                  <kbd>/serverstats channels</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the channel count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats stage-channels</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the stage channel count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats text-channels</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the text channel count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats voice-channels</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the voice channel count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats news-channels</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the announcement/news channel count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats members</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the server's member count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats bots</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the server's bot count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats roles</kbd> -{" "}
                  <span className="p-color">Keep track of the role count</span>
                </li>
                <li>
                  <kbd>/serverstats emoji</kbd> -{" "}
                  <span className="p-color">Keep track of the emoji count</span>
                </li>
                <li>
                  <kbd>/serverstats static-emoji</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the static emoji count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats animated-emoji</kbd> -{" "}
                  <span className="p-color">
                    Keep track of the animated emoji count
                  </span>
                </li>
                <li>
                  <kbd>/serverstats time</kbd> -{" "}
                  <span className="p-color">
                    Keep track of a specified timezone
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb29" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb29">
              Setup ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/setup help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/setup tickets</kbd> -{" "}
                  <span className="p-color">Set up the ticketing system</span>
                </li>
                <li>
                  <kbd>/setup customvoice</kbd> -{" "}
                  <span className="p-color">
                    Set up the join to create voice system
                  </span>
                </li>
                <li>
                  <kbd>/setup logs</kbd> -{" "}
                  <span className="p-color">Set up server logs</span>
                </li>
                <li>
                  <kbd>/setup fun</kbd> -{" "}
                  <span className="p-color">Set up fun channels</span>
                </li>
                <li>
                  <kbd>/setup games</kbd> -{" "}
                  <span className="p-color">Set up game channels</span>
                </li>
                <li>
                  <kbd>/setup welcomechannels</kbd> -{" "}
                  <span className="p-color">Set up welcome channels</span>
                </li>
                <li>
                  <kbd>/setup welcomerole</kbd> -{" "}
                  <span className="p-color">Set up the welcome role</span>
                </li>
                <li>
                  <kbd>/setup ticketpanel</kbd> -{" "}
                  <span className="p-color">Set up the ticket panel</span>
                </li>
                <li>
                  <kbd>/setup deletesetup</kbd> -{" "}
                  <span className="p-color">Remove one of these setups</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb30" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb30">
              Soundboard 🎛️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/soundboard help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/soundboard windows windowserror</kbd> -{" "}
                  <span className="p-color">Play the windows error sound</span>
                </li>
                <li>
                  <kbd>/soundboard windows windowsshutdown</kbd> -{" "}
                  <span className="p-color">
                    Play the windows shutdown sound
                  </span>
                </li>
                <li>
                  <kbd>/soundboard windows windowsstartup</kbd> -{" "}
                  <span className="p-color">
                    Play the windows startup sound
                  </span>
                </li>
                <li>
                  <kbd>/soundboard earrape reee</kbd> -{" "}
                  <span className="p-color">Play the reee sound</span>
                </li>
                <li>
                  <kbd>/soundboard earrape defaultdance</kbd> -{" "}
                  <span className="p-color">Play the default dance sound</span>
                </li>
                <li>
                  <kbd>/soundboard earrape startup</kbd> -{" "}
                  <span className="p-color">Play the startup sound</span>
                </li>
                <li>
                  <kbd>/soundboard earrape thomas</kbd> -{" "}
                  <span className="p-color">Play the thomas sound</span>
                </li>
                <li>
                  <kbd>/soundboard earrape wegothim</kbd> -{" "}
                  <span className="p-color">Play the we got him sound</span>
                </li>
                <li>
                  <kbd>/soundboard songs dancememe</kbd> -{" "}
                  <span className="p-color">Play the dance meme song</span>
                </li>
                <li>
                  <kbd>/soundboard songs despacito</kbd> -{" "}
                  <span className="p-color">Play despacito</span>
                </li>
                <li>
                  <kbd>/soundboard songs elevator</kbd> -{" "}
                  <span className="p-color">Plat the elevator song</span>
                </li>
                <li>
                  <kbd>/soundboard songs rickastley</kbd> -{" "}
                  <span className="p-color">Rickroll someone</span>
                </li>
                <li>
                  <kbd>/soundboard songs running</kbd> -{" "}
                  <span className="p-color">Play the running song</span>
                </li>
                <li>
                  <kbd>/soundboard songs tobecontinued</kbd> -{" "}
                  <span className="p-color">Play the to be continued song</span>
                </li>
                <li>
                  <kbd>/soundboard discord discordcall</kbd> -{" "}
                  <span className="p-color">Play the discord call sound</span>
                </li>
                <li>
                  <kbd>/soundboard discord discordjoin</kbd> -{" "}
                  <span className="p-color">Play the discord join sound</span>
                </li>
                <li>
                  <kbd>/soundboard discord discordleave</kbd> -{" "}
                  <span className="p-color">Play the discord leave sound</span>
                </li>
                <li>
                  <kbd>/soundboard discord discordnotification</kbd> -{" "}
                  <span className="p-color">Play the discord ping sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes fbi</kbd> -{" "}
                  <span className="p-color">Play the fbi meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes jeff</kbd> -{" "}
                  <span className="p-color">Play the jeff meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes lambo</kbd> -{" "}
                  <span className="p-color">Play the lambo meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes missionfailed</kbd> -{" "}
                  <span className="p-color">
                    Play the mission failed meme sound
                  </span>
                </li>
                <li>
                  <kbd>/soundboard memes moaning</kbd> -{" "}
                  <span className="p-color">( ͡° ͜ʖ ͡°)</span>
                </li>
                <li>
                  <kbd>/soundboard memes nani</kbd> -{" "}
                  <span className="p-color">Play the nani meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes nyancat</kbd> -{" "}
                  <span className="p-color">Play the nyan cat meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes ohh</kbd> -{" "}
                  <span className="p-color">Play the ohh meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes rimshot</kbd> -{" "}
                  <span className="p-color">Play the rimshot sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes roblox</kbd> -{" "}
                  <span className="p-color">Play the roblox meme sound</span>
                </li>
                <li>
                  <kbd>soundboard memes shotdown</kbd> -{" "}
                  <span className="p-color">Play the shot down meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes spongebob</kbd> -{" "}
                  <span className="p-color">Play the spongebob meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes wow</kbd> -{" "}
                  <span className="p-color">Play the wow meme sound</span>
                </li>
                <li>
                  <kbd>/soundboard memes yeet</kbd> -{" "}
                  <span className="p-color">Play the yeet meme sound</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb31" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb31">
              Sticky messages 🗨️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/stickymessages help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/stickymessages stick</kbd> -{" "}
                  <span className="p-color">Stick a message to a channel</span>
                </li>
                <li>
                  <kbd>/stickymessages messages</kbd> -{" "}
                  <span className="p-color">Show stickied messages</span>
                </li>
                <li>
                  <kbd>/stickymessages unstick</kbd> -{" "}
                  <span className="p-color">
                    Unstck a message from a channel
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb32" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb32">
              Suggestions 💡
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/suggestions help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/suggestions accept</kbd> -{" "}
                  <span className="p-color">Accept a suggestion</span>
                </li>
                <li>
                  <kbd>/suggestions deny</kbd> -{" "}
                  <span className="p-color">Deny a suggestion</span>
                </li>
                <li>
                  <kbd>/suggestions send</kbd> -{" "}
                  <span className="p-color">Send a suggestion</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb33" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb33">
              Thanks/rep system 🤝
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/thanks help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/thanks check</kbd> -{" "}
                  <span className="p-color">Check your thanks count</span>
                </li>
                <li>
                  <kbd>/thanks thanks</kbd> -{" "}
                  <span className="p-color">Thank a user</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb34" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb34">
              Tickets 🎫
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/tickets help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/tickets add</kbd> -{" "}
                  <span className="p-color">Add a user to a ticket</span>
                </li>
                <li>
                  <kbd>/tickets claim</kbd> -{" "}
                  <span className="p-color">Claim a ticket</span>
                </li>
                <li>
                  <kbd>/tickets close</kbd> -{" "}
                  <span className="p-color">Close a ticket</span>
                </li>
                <li>
                  <kbd>/tickets delete</kbd> -{" "}
                  <span className="p-color">Delete a ticket</span>
                </li>
                <li>
                  <kbd>/tickets information</kbd> -{" "}
                  <span className="p-color">
                    Display information about a ticket
                  </span>
                </li>
                <li>
                  <kbd>/tickets lower</kbd> -{" "}
                  <span className="p-color">Lower a ticket</span>
                </li>
                <li>
                  <kbd>/tickets create</kbd> -{" "}
                  <span className="p-color">Create a ticket</span>
                </li>
                <li>
                  <kbd>/tickets notice</kbd> -{" "}
                  <span className="p-color">Send a notice in a ticket</span>
                </li>
                <li>
                  <kbd>$/tickets open</kbd> -{" "}
                  <span className="p-color">Reopen a ticket</span>
                </li>
                <li>
                  <kbd>/tickets raise</kbd> -{" "}
                  <span className="p-color">Raise a ticket</span>
                </li>
                <li>
                  <kbd>/tickets remove</kbd> -{" "}
                  <span className="p-color">Remove a user from a ticket</span>
                </li>
                <li>
                  <kbd>/tickets rename</kbd> -{" "}
                  <span className="p-color">Rename a ticket</span>
                </li>
                <li>
                  <kbd>/tickets transcript</kbd> -{" "}
                  <span className="p-color">Display the ticket transcript</span>
                </li>
                <li>
                  <kbd>/tickets unclaim</kbd> -{" "}
                  <span className="p-color">Unclaim a ticket</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb35" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb35">
              Tools 🛠️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/tools help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/tools anagram</kbd> -{" "}
                  <span className="p-color">Create an anagram</span>
                </li>
                <li>
                  <kbd>/tools button</kbd> -{" "}
                  <span className="p-color">Create a button</span>
                </li>
                <li>
                  <kbd>/tools calculator</kbd> -{" "}
                  <span className="p-color">Calculate a sum</span>
                </li>
                <li>
                  <kbd>/tools decode</kbd> -{" "}
                  <span className="p-color">Decode binare code to text</span>
                </li>
                <li>
                  <kbd>/tools emojify</kbd> -{" "}
                  <span className="p-color">Convert text to emoji</span>
                </li>
                <li>
                  <kbd>/tools encode</kbd> -{" "}
                  <span className="p-color">Encode text to binary</span>
                </li>
                <li>
                  <kbd>/tools enlarge</kbd> -{" "}
                  <span className="p-color">Enlarge an emoji</span>
                </li>
                <li>
                  <kbd>/tools mcskin</kbd> -{" "}
                  <span className="p-color">
                    See the Minecraft skin of a specified user
                  </span>
                </li>
                <li>
                  <kbd>/tools mcstatus</kbd> -{" "}
                  <span className="p-color">
                    See the status of a Minecraft server
                  </span>
                </li>
                <li>
                  <kbd>/tools pwdgen</kbd> -{" "}
                  <span className="p-color">Generate a password</span>
                </li>
                <li>
                  <kbd>/tools qrcode</kbd> -{" "}
                  <span className="p-color">Generate a QR code from text</span>
                </li>
                <li>
                  <kbd>/tools remind</kbd> -{" "}
                  <span className="p-color">Create a reminder</span>
                </li>
                <li>
                  <kbd>/tools sourcebin</kbd> -{" "}
                  <span className="p-color">Upload code to sourcebin</span>
                </li>
                <li>
                  <kbd>/tools url</kbd> -{" "}
                  <span className="p-color">Create a shortened URL</span>
                </li>
                <li>
                  <kbd>/tools review</kbd> -{" "}
                  <span className="p-color">Write a review</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb36" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb36">
              Voice 🔊
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/voice help</kbd> -{" "}
                  <span className="p-color">
                    Display help for this category
                  </span>
                </li>
                <li>
                  <kbd>/voice limit</kbd> -{" "}
                  <span className="p-color">
                    Limit your custom voice channel
                  </span>
                </li>
                <li>
                  <kbd>/voice lock</kbd> -{" "}
                  <span className="p-color">
                    Lock your custom voice channel
                  </span>
                </li>
                <li>
                  <kbd>/voice rename</kbd> -{" "}
                  <span className="p-color">
                    Rename your custom voice channel
                  </span>
                </li>
                <li>
                  <kbd>/voice unlock</kbd> -{" "}
                  <span className="p-color">
                    Unlock your custom voice channel
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
