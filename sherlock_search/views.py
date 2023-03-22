#takes a few minutes to load (2 min 50sec), does not show anything on browser until it has all the results
#site: http://127.0.0.1:8000/sherlock/search/
import os
import subprocess
from django.shortcuts import render

def search(request):
    if request.method == 'POST':
        username = request.POST['username']
        # Set the working directory to ./sherlock
        os.chdir("./sherlock")
        # Execute the sherlock command with the desired arguments
        result = subprocess.run(["python3", "sherlock", username], capture_output=True, text=True)
        # Extract the usernames from the output
        usernames = result.stdout.splitlines()
        # Render the template with the usernames
        return render(request, 'search_result.html', {'usernames': usernames})
    else:
        return render(request, 'search.html')


'''
#example browser output 


Usernames:

    [*] Checking username icecube on:
    [+] 7Cups: https://www.7cups.com/@icecube
    [+] 8tracks: https://8tracks.com/icecube
    [+] 9GAG: https://www.9gag.com/u/icecube
    [+] About.me: https://about.me/icecube
    [+] Academia.edu: https://independent.academia.edu/icecube
    [+] Airliners: https://www.airliners.net/user/icecube/profile/photos
    [+] Amino: https://aminoapps.com/u/icecube
    [+] Anilist: https://anilist.co/user/icecube/
    [+] Apple Developer: https://developer.apple.com/forums/profile/icecube
    [+] Apple Discussions: https://discussions.apple.com/profile/icecube
    [+] Archive of Our Own: https://archiveofourown.org/users/icecube
    [+] Archive.org: https://archive.org/details/@icecube
    [+] AskFM: https://ask.fm/icecube
    [+] Audiojungle: https://audiojungle.net/user/icecube
    [+] BLIP.fm: https://blip.fm/icecube
    [+] Bandcamp: https://www.bandcamp.com/icecube
    [+] Behance: https://www.behance.net/icecube
    [+] BitBucket: https://bitbucket.org/icecube/
    [+] Blogger: https://icecube.blogspot.com
    [+] BodyBuilding: https://bodyspace.bodybuilding.com/icecube
    [+] Bookcrossing: https://www.bookcrossing.com/mybookshelf/icecube/
    [+] BuzzFeed: https://buzzfeed.com/icecube
    [+] CGTrader: https://www.cgtrader.com/icecube
    [+] Career.habr: https://career.habr.com/icecube
    [+] Championat: https://www.championat.com/user/icecube
    [+] Chess: https://www.chess.com/member/icecube
    [+] Clapper: https://clapperapp.com/icecube
    [+] Clubhouse: https://www.clubhouse.com/@icecube
    [+] Codecademy: https://www.codecademy.com/profiles/icecube
    [+] Codechef: https://www.codechef.com/users/icecube
    [+] Codeforces: https://codeforces.com/profile/icecube
    [+] ColourLovers: https://www.colourlovers.com/lover/icecube
    [+] Crowdin: https://crowdin.com/profile/icecube
    [+] Cults3D: https://cults3d.com/en/users/icecube/creations
    [+] DailyMotion: https://www.dailymotion.com/icecube
    [+] Dealabs: https://www.dealabs.com/profile/icecube
    [+] DeviantART: https://icecube.deviantart.com
    [+] Discogs: https://www.discogs.com/user/icecube
    [+] Disqus: https://disqus.com/icecube
    [+] Docker Hub: https://hub.docker.com/u/icecube/
    [+] Dribbble: https://dribbble.com/icecube
    [+] Duolingo: https://www.duolingo.com/profile/icecube
    [+] Eintracht Frankfurt Forum: https://community.eintracht.de/fans/icecube
    [+] EyeEm: https://www.eyeem.com/u/icecube
    [+] F3.cool: https://f3.cool/icecube/
    [+] Fiverr: https://www.fiverr.com/icecube
    [+] Flightradar24: https://my.flightradar24.com/icecube
    [+] Flipboard: https://flipboard.com/@icecube
    [+] FortniteTracker: https://fortnitetracker.com/profile/all/icecube
    [+] Freelance.habr: https://freelance.habr.com/freelancers/icecube
    [+] Freelancer: https://www.freelancer.com/u/icecube
    [+] Freesound: https://freesound.org/people/icecube/
    [+] G2G: https://www.g2g.com/icecube
    [+] GaiaOnline: https://www.gaiaonline.com/profiles/icecube
    [+] GeeksforGeeks: https://auth.geeksforgeeks.org/user/icecube
    [+] Genius (Artists): https://genius.com/artists/icecube
    [+] Genius (Users): https://genius.com/icecube
    [+] Gesundheitsfrage: https://www.gesundheitsfrage.net/nutzer/icecube
    [+] Giant Bomb: https://www.giantbomb.com/profile/icecube/
    [+] Giphy: https://giphy.com/icecube
    [+] GitHub: https://www.github.com/icecube
    [+] GitLab: https://gitlab.com/icecube
    [+] Gitee: https://gitee.com/icecube
    [+] Grailed: https://www.grailed.com/icecube
    [+] Gravatar: http://en.gravatar.com/icecube
    [+] Gumroad: https://www.gumroad.com/icecube
    [+] Gutefrage: https://www.gutefrage.net/nutzer/icecube
    [+] HackerNews: https://news.ycombinator.com/user?id=icecube
    [+] HackerRank: https://hackerrank.com/icecube
    [+] Hashnode: https://hashnode.com/@icecube
    [+] Houzz: https://houzz.com/user/icecube
    [+] HubPages: https://hubpages.com/@icecube
    [+] ICQ: https://icq.im/icecube/en
    [+] IFTTT: https://www.ifttt.com/p/icecube
    [+] IRL: https://www.irl.com/icecube
    [+] Imgur: https://imgur.com/user/icecube
    [+] Instagram: https://www.instagram.com/icecube
    [+] Instructables: https://www.instructables.com/member/icecube
    [+] Issuu: https://issuu.com/icecube
    [+] KEAKR: https://www.keakr.com/en/profile/icecube
    [+] Kaggle: https://www.kaggle.com/icecube
    [+] Keybase: https://keybase.io/icecube
    [+] Kongregate: https://www.kongregate.com/accounts/icecube
    [+] LOR: https://www.linux.org.ru/people/icecube/profile
    [+] Launchpad: https://launchpad.net/~icecube
    [+] LeetCode: https://leetcode.com/icecube
    [+] Letterboxd: https://letterboxd.com/icecube
    [+] Lichess: https://lichess.org/@/icecube
    [+] Linktree: https://linktr.ee/icecube
    [+] LiveJournal: https://icecube.livejournal.com
    [+] MMORPG Forum: https://forums.mmorpg.com/profile/icecube
    [+] Mapify: https://mapify.travel/icecube
    [+] Memrise: https://www.memrise.com/user/icecube/
    [+] MixCloud: https://www.mixcloud.com/icecube/
    [+] Monkeytype: https://monkeytype.com/profile/icecube
    [+] MyAnimeList: https://myanimelist.net/profile/icecube
    [+] MyMiniFactory: https://www.myminifactory.com/users/icecube
    [+] Mydramalist: https://www.mydramalist.com/profile/icecube
    [+] Myspace: https://myspace.com/icecube
    [+] Needrom: https://www.needrom.com/author/icecube/
    [+] Newgrounds: https://icecube.newgrounds.com
    [+] NitroType: https://www.nitrotype.com/racer/icecube
    [+] OK: https://ok.ru/icecube
    [+] PCGamer: https://forums.pcgamer.com/members/?username=icecube
    [+] Pastebin: https://pastebin.com/u/icecube
    [+] Patreon: https://www.patreon.com/icecube
    [+] Periscope: https://www.periscope.tv/icecube/
    [+] Pinkbike: https://www.pinkbike.com/u/icecube/
    [+] Pokemon Showdown: https://pokemonshowdown.com/users/icecube
    [+] PromoDJ: http://promodj.com/icecube
    [+] Quizlet: https://quizlet.com/icecube
    [+] Rate Your Music: https://rateyourmusic.com/~icecube
    [+] Redbubble: https://www.redbubble.com/people/icecube
    [+] Reddit: https://www.reddit.com/user/icecube
    [+] Reisefrage: https://www.reisefrage.net/nutzer/icecube
    [+] Replit.com: https://replit.com/@icecube
    [+] ReverbNation: https://www.reverbnation.com/icecube
    [+] Roblox: https://www.roblox.com/user.aspx?username=icecube
    [+] Rumble: https://rumble.com/user/icecube
    [+] RuneScape: https://apps.runescape.com/runemetrics/app/overview/player/icecube
    [+] Scratch: https://scratch.mit.edu/users/icecube
    [+] Scribd: https://www.scribd.com/icecube
    [+] Shpock: https://www.shpock.com/shop/icecube/items
    [+] Sketchfab: https://sketchfab.com/icecube
    [+] Slashdot: https://slashdot.org/~icecube
    [+] SlideShare: https://slideshare.net/icecube
    [+] Slides: https://slides.com/icecube
    [+] Smule: https://www.smule.com/icecube
    [+] Snapchat: https://www.snapchat.com/add/icecube
    [+] SoundCloud: https://soundcloud.com/icecube
    [+] SourceForge: https://sourceforge.net/u/icecube
    [+] Speedrun.com: https://speedrun.com/user/icecube
    [+] Sportlerfrage: https://www.sportlerfrage.net/nutzer/icecube
    [+] Spotify: https://open.spotify.com/user/icecube
    [+] SteamGroup: https://steamcommunity.com/groups/icecube
    [+] TETR.IO: https://ch.tetr.io/u/icecube
    [+] Telegram: https://t.me/icecube
    [+] Tellonym.me: https://tellonym.me/icecube
    [+] Tenor: https://tenor.com/users/icecube
    [+] ThemeForest: https://themeforest.net/user/icecube
    [+] Tinder: https://www.tinder.com/@icecube
    [+] TradingView: https://www.tradingview.com/u/icecube/
    [+] Trakt: https://www.trakt.tv/users/icecube
    [+] TrashboxRU: https://trashbox.ru/users/icecube
    [+] Trello: https://trello.com/icecube
    [+] TryHackMe: https://tryhackme.com/p/icecube
    [+] Tuna: https://tuna.voicemod.net/user/icecube
    [+] Tweakers: https://tweakers.net/gallery/icecube
    [+] Twitch: https://www.twitch.tv/icecube
    [+] Twitter: https://twitter.com/icecube
    [+] Typeracer: https://data.typeracer.com/pit/profile?user=icecube
    [+] Ultimate-Guitar: https://ultimate-guitar.com/u/icecube
    [+] Unsplash: https://unsplash.com/@icecube
    [+] VK: https://vk.com/icecube
    [+] VSCO: https://vsco.co/icecube
    [+] Venmo: https://account.venmo.com/u/icecube
    [+] Vimeo: https://vimeo.com/icecube
    [+] VirusTotal: https://www.virustotal.com/gui/user/icecube
    [+] Warrior Forum: https://www.warriorforum.com/members/icecube.html
    [+] Wattpad: https://www.wattpad.com/user/icecube
    [+] Wikidot: http://www.wikidot.com/user:info/icecube
    [+] Wikipedia: https://en.wikipedia.org/wiki/Special:CentralAuth/icecube?uselang=qqx
    [+] Windy: https://community.windy.com/user/icecube
    [+] WordPress: https://icecube.wordpress.com/
    [+] WordPressOrg: https://profiles.wordpress.org/icecube/
    [+] Wordnik: https://www.wordnik.com/users/icecube
    [+] Wykop: https://www.wykop.pl/ludzie/icecube
    [+] YouNow: https://www.younow.com/icecube/
    [+] Youtube User: https://www.youtube.com/user/icecube
    [+] couchsurfing: https://www.couchsurfing.com/people/icecube
    [+] datingRU: http://dating.ru/icecube
    [+] drive2: https://www.drive2.ru/users/icecube
    [+] eintracht: https://community.eintracht.de/fans/icecube
    [+] fl: https://www.fl.ru/users/icecube
    [+] forumhouseRU: https://www.forumhouse.ru/members/?username=icecube
    [+] freecodecamp: https://www.freecodecamp.org/icecube
    [+] furaffinity: https://www.furaffinity.net/user/icecube
    [+] geocaching: https://www.geocaching.com/p/default.aspx?u=icecube
    [+] gfycat: https://gfycat.com/@icecube
    [+] habr: https://habr.com/ru/users/icecube
    [+] iMGSRC.RU: https://imgsrc.ru/main/user.php?user=icecube
    [+] igromania: http://forum.igromania.ru/member.php?username=icecube
    [+] interpals: https://www.interpals.net/icecube
    [+] irecommend: https://irecommend.ru/users/icecube
    [+] jbzd.com.pl: https://jbzd.com.pl/uzytkownik/icecube
    [+] jeuxvideo: http://www.jeuxvideo.com/profil/icecube?mode=infos
    [+] kofi: https://ko-fi.com/icecube
    [+] kwork: https://kwork.ru/user/icecube
    [+] last.fm: https://last.fm/user/icecube
    [+] livelib: https://www.livelib.ru/reader/icecube
    [+] mastodon.social: https://mastodon.social/@icecube
    [+] metacritic: https://www.metacritic.com/user/icecube
    [+] minds: https://www.minds.com/icecube/
    [+] note: https://note.com/icecube
    [+] npm: https://www.npmjs.com/~icecube
    [+] opennet: https://www.opennet.ru/~icecube
    [+] osu!: https://osu.ppy.sh/users/icecube
    [+] pikabu: https://pikabu.ru/@icecube
    [+] pr0gramm: https://pr0gramm.com/user/icecube
    [+] satsisRU: https://satsis.info/user/icecube
    [+] social.tchncs.de: https://social.tchncs.de/@icecube
    [+] wykop.pl: https://www.wykop.pl/ludzie/icecube
    [*] Search completed with 202 results



'''