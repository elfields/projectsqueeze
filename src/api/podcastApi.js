import { Client } from "podcast-api";

const client = Client({
  apiKey:
    process.env.REACT_APP_LISTEN_API_KEY || "3106a9e253914404b119f8cfd039bc23",
});

function getMockData() {
  return [
    {
      audio:
        "https://www.listennotes.com/e/p/56e6b7d657ef4aed8a97f760faf9ee6e/",
      audio_length_sec: 4289,
      rss: "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      description_highlighted:
        '...A serious accident took Jessie down a path of wanting to understand her body and <span class="ln-search-highlight">all</span> the things that impact how she feels....',
      description_original:
        '<p>My guest today is biochemist and author Jessie Inchauspe. A serious accident took Jessie down a path of wanting to understand her body and all the things that impact how she feels. She created an online community called \'Glucose Goddess\' which inspired her latest book "Glucose Revolution."</p><p>We discuss how so many chronic illnesses result from us not being able to control our glucose blood levels. Jessie drills down on the science of glucose and precisely what we can do to manage our levels and avoid harmful spikes. I have never really given that much attention to glucose because I thought if I ate healthily, that would be sufficient; that glucose was something diabetics or pre-diabetics needed to monitor closely... was I wrong. Aging, sleep, energy levels, cravings, hormones, and the list goes on and on of all the things our glucose levels impact. She makes understanding the science simple. And how we can apply day-to-day habits and hacks to do our best to flatten our glucose curves. I learned a lot, and Jessie knows how to make glucose talk fun. Enjoy</p><p>Book: Glucose Revolution</p><p>Website: <a href="https://www.glucose-revolution.com/">www.glucose-revolution.com</a></p><p>Instagram: <a href="https://www.instagram.com/glucosegoddess/">@glucosegoddess</a></p><p>Gabby Reece <a href="https://www.instagram.com/gabbyreece/?hl=en">Instagram</a></p><p>For show notes and past guests, please visit <a href="https://linktr.ee/gabbyreece">gabriellereece.com/podcast</a></p><p><em>The Gabby Reece Show talks to top experts with the goal of extracting the best information you will need to navigate the universe of health, fitness, relationships, parenting, and business. Gabby keeps it simple but gets to the heart of the conversation with the hopes of providing you with realistic takeaways.</em></p><p><a href="https://www.nutrisense.io/marketing/gabby">nutrisense.io/GABBY</a></p><p><em>Thank you to our sponsors...</em></p><p>NUTRISENSE are offering 30% off any subscription to the NutriSense CGM programme. Use code gabbyreece at check-out and visit NutriSense: <a href="http://nutrisense.io/gabbyreece">nutrisense.io/gabbyreece</a></p><p> </p><p>Learn more about your ad choices. Visit <a href="https://megaphone.fm/adchoices">megaphone.fm/adchoices</a></p>',
      title_highlighted:
        'International Best Selling Author Jessie Inchauspé: <span class="ln-search-highlight">All</span> About Blood Glucose Levels',
      title_original:
        "International Best Selling Author Jessie Inchauspé: All About Blood Glucose Levels",
      transcripts_highlighted: [],
      image:
        "https://cdn-images-1.listennotes.com/podcasts/the-gabby-reece-show-gabby-reece-Et0kgexuwPX-DVceTU5MYOZ.300x300.jpg",
      thumbnail:
        "https://cdn-images-1.listennotes.com/podcasts/the-gabby-reece-show-gabby-reece-Et0kgexuwPX-DVceTU5MYOZ.300x300.jpg",
      itunes_id: 1492179907,
      pub_date_ms: 1652688000012,
      id: "56e6b7d657ef4aed8a97f760faf9ee6e",
      listennotes_url:
        "https://www.listennotes.com/e/56e6b7d657ef4aed8a97f760faf9ee6e/",
      explicit_content: false,
      link: "https://www.gabriellereece.com/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
      guid_from_rss: "11ff3034-967e-11ec-a07c-dbc43970b6d4",
      podcast: {
        listennotes_url:
          "https://www.listennotes.com/c/4dfd7e07ed8d409daea4c0a85fd78370/",
        id: "4dfd7e07ed8d409daea4c0a85fd78370",
        title_highlighted: "The Gabby Reece Show",
        title_original: "The Gabby Reece Show",
        publisher_highlighted: "Gabby Reece",
        publisher_original: "Gabby Reece",
        image:
          "https://cdn-images-1.listennotes.com/podcasts/the-gabby-reece-show-gabby-reece-Et0kgexuwPX-DVceTU5MYOZ.300x300.jpg",
        thumbnail:
          "https://cdn-images-1.listennotes.com/podcasts/the-gabby-reece-show-gabby-reece-Et0kgexuwPX-DVceTU5MYOZ.300x300.jpg",
        genre_ids: [93, 191, 171, 88, 245, 122],
        listen_score:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        listen_score_global_rank:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      },
    },
    {
      audio:
        "https://www.listennotes.com/e/p/9b133798fed64d3da9c4cbd57c5ab058/",
      audio_length_sec: 153,
      rss: "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      description_highlighted:
        "...Please can you spare a moment to fill in this questionnaire about Everyday Positivity?...",
      description_original:
        '<p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeHgqMh_EDMdPanK0VcPX9KugqY_AwkyQ4TVB1etDziMKU3Dg/viewform?usp=sf_link">Please can you spare a moment to fill in this questionnaire about Everyday Positivity?</a></p>',
      title_highlighted: 'Feel It <span class="ln-search-highlight">All</span>',
      title_original: "Feel It All",
      transcripts_highlighted: [],
      image:
        "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
      thumbnail:
        "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
      itunes_id: 1440624954,
      pub_date_ms: 1654920057056,
      id: "9b133798fed64d3da9c4cbd57c5ab058",
      listennotes_url:
        "https://www.listennotes.com/e/9b133798fed64d3da9c4cbd57c5ab058/",
      explicit_content: false,
      link: "https://anchor.fm/everyday-positivity/episodes/Feel-It-All-e1jpngc?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
      guid_from_rss: "f97f3666-1405-47e6-b1db-6701a1439e80",
      podcast: {
        listennotes_url:
          "https://www.listennotes.com/c/67a891deee494bc6b5a0c2855f39f1d6/",
        id: "67a891deee494bc6b5a0c2855f39f1d6",
        title_highlighted: "Everyday Positivity",
        title_original: "Everyday Positivity",
        publisher_highlighted: "Everyday Positivity",
        publisher_original: "Everyday Positivity",
        image:
          "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
        thumbnail:
          "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
        genre_ids: [90, 88],
        listen_score:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        listen_score_global_rank:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      },
    },
    {
      audio:
        "https://www.listennotes.com/e/p/3aa8a90abe0c488a889deb57078a16a7/",
      audio_length_sec: 2204,
      rss: "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      description_highlighted:
        "...Joining Theresa to discuss spirituality for every season is Horizon Inspired meditation teacher, retreat leader and author of Your Spiritual Almanac and Mind and Bowl, Joey Hulin.To find out more about Joey, her retreats and order Your Spiritual Almanac and Mind and Bowl visit:horizoninspired.co.ukTo find out more about Theresa’s bestselling dream, intuition, afterlife, astrology and mystical titles and mission, visit:Www.theresacheung.comhttp://linktr.ee/theresacheungYou can contact Theresa via @thetheresacheung on Instagram and her author pages on Facebook and Twitter and you can email her directly at: angeltalk710@aol.comThank you to Cluain Ri for the blissful episode music.White Shores is produced by Matthew Cooper...",
      description_original:
        '<p>Joining Theresa to discuss spirituality for every season is Horizon Inspired meditation teacher, retreat leader and author of Your Spiritual Almanac and Mind and Bowl, Joey Hulin.<br /><br />To find out more about Joey, her retreats and order Your Spiritual Almanac and Mind and Bowl visit:<br /><a href="http://www.horizoninspired.co.uk">horizoninspired.co.uk</a><br /><br />To find out more about Theresa’s bestselling dream, intuition, afterlife, astrology and mystical titles and mission, visit:<br /><br /><a href="http://www.theresacheung.com/">Www.theresacheung.com</a></p><p><a href="http://linktr.ee/theresacheung">http://linktr.ee/theresacheung<br /></a><br />You can contact Theresa via @thetheresacheung on Instagram and her author pages on Facebook and Twitter and you can email her directly at: <a href="mailto:angeltalk710@aol.com">angeltalk710@aol.com</a></p><p>Thank you to Cluain Ri for the blissful episode music.<br /><br />White Shores is produced by Matthew Cooper</p><p><br /><br /><br /></p>',
      title_highlighted:
        'A Message For <span class="ln-search-highlight">All</span> Seasons with the Spiritual Almanac, Joey Hulin',
      title_original:
        "A Message For All Seasons with the Spiritual Almanac, Joey Hulin",
      transcripts_highlighted: [],
      image:
        "https://cdn-images-1.listennotes.com/podcasts/white-shores-with-theresa-cheung-theresa-xuh4LFfrQgI-G2pn6EScZQR.300x300.jpg",
      thumbnail:
        "https://cdn-images-1.listennotes.com/podcasts/white-shores-with-theresa-cheung-theresa-xuh4LFfrQgI-G2pn6EScZQR.300x300.jpg",
      itunes_id: 1475553348,
      pub_date_ms: 1655625600005,
      id: "3aa8a90abe0c488a889deb57078a16a7",
      listennotes_url:
        "https://www.listennotes.com/e/3aa8a90abe0c488a889deb57078a16a7/",
      explicit_content: false,
      link: "http://theresacheung.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
      guid_from_rss: "Buzzsprout-10331336",
      podcast: {
        listennotes_url:
          "https://www.listennotes.com/c/b1c61c4159a74c33b647a7ca411d3408/",
        id: "b1c61c4159a74c33b647a7ca411d3408",
        title_highlighted: "White Shores with Theresa Cheung",
        title_original: "White Shores with Theresa Cheung",
        publisher_highlighted: "Theresa Cheung",
        publisher_original: "Theresa Cheung",
        image:
          "https://cdn-images-1.listennotes.com/podcasts/white-shores-with-theresa-cheung-theresa-xuh4LFfrQgI-G2pn6EScZQR.300x300.jpg",
        thumbnail:
          "https://cdn-images-1.listennotes.com/podcasts/white-shores-with-theresa-cheung-theresa-xuh4LFfrQgI-G2pn6EScZQR.300x300.jpg",
        genre_ids: [111, 69, 91, 88, 181],
        listen_score:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        listen_score_global_rank:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      },
    },
  ];
}

export async function getPodcastsByGenreAndMaxLength(genres, maxMins) {
  if (process.env.REACT_APP_MOCK_DATA === "true") {
    return getMockData();
  }
  return await client
    .search({
      q: "All",
      genre_ids: genres.join(),
      len_min: 15,
      len_max: maxMins,
      region: "gb",
      publisher_region: "gb",
      language: "English",
      safe_mode: 0,
    })
    .then((response) => {
      return response.data.results;
    });
}

export async function getPodcast(id) {
  if (process.env.REACT_APP_MOCK_DATA === "true") {
    return {
      id: "67a891deee494bc6b5a0c2855f39f1d6",
      title: "Everyday Positivity",
      publisher: "Everyday Positivity",
      image:
        "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
      thumbnail:
        "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
      listennotes_url:
        "https://www.listennotes.com/c/67a891deee494bc6b5a0c2855f39f1d6/",
      listen_score:
        "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      listen_score_global_rank:
        "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      total_episodes: 1390,
      audio_length_sec: 130,
      update_frequency_hours: 24,
      explicit_content: false,
      description:
        "Everyday Positivity hosted by Kate Cocker is a daily show to help you start your day on the right foot.\n\nVolley.FM\nDownload the app to listen ad free!",
      itunes_id: 1440624954,
      rss: "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      latest_pub_date_ms: 1660363258000,
      latest_episode_id:
        "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      earliest_pub_date_ms: 1540576275381,
      language: "English",
      country: "United Kingdom",
      website:
        "https://sbmw.app.link/jwVLiyvPkR?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
      extra: {
        twitter_handle:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        facebook_handle:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        instagram_handle:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        wechat_handle:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        patreon_handle:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        youtube_url:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        linkedin_url:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        spotify_url:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        google_url:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        amazon_music_url:
          "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        url1: "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        url2: "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
        url3: "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      },
      is_claimed: false,
      email:
        "Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing",
      type: "episodic",
      looking_for: {
        sponsors: false,
        guests: false,
        cohosts: false,
        cross_promotion: false,
      },
      genre_ids: [90, 88, 67],
      episodes: [
        {
          id: "c776c6328cd643c6b9d0c5b24dace940",
          title: "Heart To Hand and Breathe",
          description:
            '<p><a href="https://www.instagram.com/officialeverydaypositivity/">Follow Everyday Positivity On Instagram</a></p>',
          pub_date_ms: 1660363258000,
          audio:
            "https://www.listennotes.com/e/p/c776c6328cd643c6b9d0c5b24dace940/",
          audio_length_sec: 207,
          listennotes_url:
            "https://www.listennotes.com/e/c776c6328cd643c6b9d0c5b24dace940/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/c776c6328cd643c6b9d0c5b24dace940/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/Heart-To-Hand-and-Breathe-e1me0j6?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "9f290664-37ad-474b-8b44-b164c5adb169",
        },
        {
          id: "0074446ded474128ade97972088fedc5",
          title: "Deploy Some Self Compassion",
          description:
            '<p><a href="https://www.instagram.com/officialeverydaypositivity/">Follow Everyday Positivity On Instagram</a></p>',
          pub_date_ms: 1660276837000,
          audio:
            "https://www.listennotes.com/e/p/0074446ded474128ade97972088fedc5/",
          audio_length_sec: 170,
          listennotes_url:
            "https://www.listennotes.com/e/0074446ded474128ade97972088fedc5/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/0074446ded474128ade97972088fedc5/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/Deploy-Some-Self-Compassion-e1md0nt?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "7c3ccaba-a708-422d-8ff8-f3f57cd85d71",
        },
        {
          id: "ef4c1a2a1094486797004b3b01e51e5b",
          title: "Nothing Is Something",
          description:
            '<p><a href="https://www.facebook.com/groups/youreverydaypositivity/">Join Everyday Positivity on Facebook</a></p>',
          pub_date_ms: 1660190409000,
          audio:
            "https://www.listennotes.com/e/p/ef4c1a2a1094486797004b3b01e51e5b/",
          audio_length_sec: 149,
          listennotes_url:
            "https://www.listennotes.com/e/ef4c1a2a1094486797004b3b01e51e5b/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/ef4c1a2a1094486797004b3b01e51e5b/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/Nothing-Is-Something-e1mb9fb?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "624112ac-5eae-45e5-b4f0-4887a07bae82",
        },
        {
          id: "fa094eb7d3f848599cb039fba1609334",
          title: "Feel Success In Your Success",
          description:
            '<p><a href="https://www.facebook.com/groups/youreverydaypositivity/">Join Everyday Positivity on Facebook</a></p>',
          pub_date_ms: 1660104055000,
          audio:
            "https://www.listennotes.com/e/p/fa094eb7d3f848599cb039fba1609334/",
          audio_length_sec: 165,
          listennotes_url:
            "https://www.listennotes.com/e/fa094eb7d3f848599cb039fba1609334/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/fa094eb7d3f848599cb039fba1609334/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/Feel-Success-In-Your-Success-e1m9s7u?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "dd083342-7308-4b01-a200-16c0066aabd9",
        },
        {
          id: "b5f907175e854e709487b310088bd52e",
          title: "What Went Well?",
          description:
            '<p><a href="https://www.facebook.com/groups/youreverydaypositivity/">Join Everyday Positivity on Facebook</a></p>',
          pub_date_ms: 1660017621000,
          audio:
            "https://www.listennotes.com/e/p/b5f907175e854e709487b310088bd52e/",
          audio_length_sec: 203,
          listennotes_url:
            "https://www.listennotes.com/e/b5f907175e854e709487b310088bd52e/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/b5f907175e854e709487b310088bd52e/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/What-Went-Well-e1m8vce?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "6c37ea02-d2ee-4a70-9b60-766801ae6933",
        },
        {
          id: "a69839f79d304d44b6832a3217f6242b",
          title: "Be More Cat",
          description:
            '<p><a href="https://www.eventbrite.co.uk/e/everyday-positivity-hangout-august-tickets-392524259627?fbclid=IwAR1Vc_QEthVehtYOqfoiy0zhnR0wOtCao1m-5mFyglKA3FCx8-ezcaAAvuM">Come and hangout with me.</a></p>',
          pub_date_ms: 1659931226000,
          audio:
            "https://www.listennotes.com/e/p/a69839f79d304d44b6832a3217f6242b/",
          audio_length_sec: 131,
          listennotes_url:
            "https://www.listennotes.com/e/a69839f79d304d44b6832a3217f6242b/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/a69839f79d304d44b6832a3217f6242b/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/Be-More-Cat-e1m4peq?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "5f8743ac-c49b-4ac9-bb6e-f482313c3c1d",
        },
        {
          id: "f6a06407b1d446dca705e4e29f3b1092",
          title: "JOURNAL: Safe",
          description:
            '<p><a href="https://www.eventbrite.co.uk/e/everyday-positivity-hangout-august-tickets-392524259627?fbclid=IwAR1Vc_QEthVehtYOqfoiy0zhnR0wOtCao1m-5mFyglKA3FCx8-ezcaAAvuM">Come and hangout with me.</a></p>',
          pub_date_ms: 1659844845000,
          audio:
            "https://www.listennotes.com/e/p/f6a06407b1d446dca705e4e29f3b1092/",
          audio_length_sec: 106,
          listennotes_url:
            "https://www.listennotes.com/e/f6a06407b1d446dca705e4e29f3b1092/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/f6a06407b1d446dca705e4e29f3b1092/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/JOURNAL-Safe-e1m4pe7?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "f3cd193c-a4fa-4238-baf3-23c23d434b36",
        },
        {
          id: "7a07ace2f8234920bd567e6dec1c1083",
          title: "Open Hearted",
          description:
            '<p><a href="https://www.eventbrite.co.uk/e/everyday-positivity-hangout-august-tickets-392524259627?fbclid=IwAR1Vc_QEthVehtYOqfoiy0zhnR0wOtCao1m-5mFyglKA3FCx8-ezcaAAvuM">Come and hangout with me.</a></p>',
          pub_date_ms: 1659758408000,
          audio:
            "https://www.listennotes.com/e/p/7a07ace2f8234920bd567e6dec1c1083/",
          audio_length_sec: 223,
          listennotes_url:
            "https://www.listennotes.com/e/7a07ace2f8234920bd567e6dec1c1083/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/7a07ace2f8234920bd567e6dec1c1083/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/Open-Hearted-e1m4pdm?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "6a29018f-2deb-4984-984e-1410597dc5d3",
        },
        {
          id: "7891b670fff7492eaf5b85f74e484808",
          title: "Your Mantra Today",
          description:
            '<p><a href="https://www.eventbrite.co.uk/e/everyday-positivity-hangout-august-tickets-392524259627?fbclid=IwAR1Vc_QEthVehtYOqfoiy0zhnR0wOtCao1m-5mFyglKA3FCx8-ezcaAAvuM">Come and hangout with me.</a></p>',
          pub_date_ms: 1659672019001,
          audio:
            "https://www.listennotes.com/e/p/7891b670fff7492eaf5b85f74e484808/",
          audio_length_sec: 97,
          listennotes_url:
            "https://www.listennotes.com/e/7891b670fff7492eaf5b85f74e484808/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/7891b670fff7492eaf5b85f74e484808/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/Your-Mantra-Today-e1m3kt6?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "91af6ea1-bf05-4578-8d36-1876d47ebec0",
        },
        {
          id: "7ace85eec43f4592a4864f53f5e93448",
          title: "The Willingness To Want",
          description:
            '<p><a href="https://www.facebook.com/groups/youreverydaypositivity/">Join Everyday Positivity on Facebook</a></p>',
          pub_date_ms: 1659585649002,
          audio:
            "https://www.listennotes.com/e/p/7ace85eec43f4592a4864f53f5e93448/",
          audio_length_sec: 170,
          listennotes_url:
            "https://www.listennotes.com/e/7ace85eec43f4592a4864f53f5e93448/",
          image:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          thumbnail:
            "https://cdn-images-1.listennotes.com/podcasts/everyday-positivity-everyday-positivity-CDaturzW98h-30jialZ2vCK.300x300.jpg",
          maybe_audio_invalid: false,
          listennotes_edit_url:
            "https://www.listennotes.com/e/7ace85eec43f4592a4864f53f5e93448/#edit",
          explicit_content: false,
          link: "https://anchor.fm/everyday-positivity/episodes/The-Willingness-To-Want-e1m20p9?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
          guid_from_rss: "b9154977-9ea0-4cd2-a91d-614d55cdecb5",
        },
      ],
      next_episode_pub_date: 1659585649002,
    };
  }
  return await client.fetchPodcastById({ id }).then((response) => {
    return response.data;
  });
}

