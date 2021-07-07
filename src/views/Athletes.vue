<template>
  <h3>ATHLETES</h3>
  <div class="p-grid p-ai-center vertical-container">
    <Card
      v-for="team_athlete in team_athletes"
      :key="team_athlete.id"
      :team_athlete="team_athlete"
    >
      <template #header style="border-color: black">
        <div class="p-col" style="border-color: black">
          <div class="box">
            <div class="athletes-title-wrap">
              <h4 class="font-text">{{ "\xa0\xa0" + team_athlete.name }}</h4>
              <div class="team">{{ +team_athlete.team + "\xa0\xa0" }}</div>

              <div class="sm_handle">
                {{ "\xa0\xa0" + team_athlete.sm_handle }}
              </div>
            </div>
            <div class="athletes-image-wrap">
              <router-link :to="getProfileUrl(team_athlete.id)">
                <img :src="team_athlete.image" alt="No image" />
              </router-link>
            </div>

            <div class="athletes-detail">
              <hr style="width: 98%; text-align: center; margin-left: 3" />
              T {{ team_athlete.tags }} | {{ team_athlete.evasions }} E
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
export default {
  methods: {
    getProfileUrl(id) {
      return "/athletes/" + id + "/profile";
    },
  },

  data() {
    return {
      team_athletes: [
        {
          id: 28,
          name: "D'Ondrai Jones",
          sm_handle: "@dondraijones",
          team: "No Cap",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/no_cap/dondrai_jones.png",
          tags: "2/6",
          evasions: "0/1",
        },
        {
          id: 32,
          name: "Jarrod Luty",
          sm_handle: "@jarrodluty2897",
          team: "No Cap",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/no_cap/jarrod_luty.png",
          tags: "4/4",
          evasions: "5/9",
        },
        {
          id: 27,
          name: "Joey Adrian",
          sm_handle: "@joeyadrian",
          team: "No Cap",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/no_cap/joey_adrian.png",
          tags: "4/4",
          evasions: "2/7",
        },
        {
          id: 47,
          name: "Bailey Harter",
          sm_handle: "@imbails",
          team: "OLLO",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/ollo/baily_harter.png",
          tags: "3/4",
          evasions: "1/4",
        },
        {
          id: 45,
          name: "Emic Kitsen",
          sm_handle: "@emic_kitsen",
          team: "OLLO",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/ollo/emic_kitsen.png",
          tags: "5/9",
          evasions: "1/6",
        },
        {
          id: 44,
          name: "Fernando Arce",
          sm_handle: "@fernando_arce",
          team: "OLLO",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/ollo/fernando_arce.png",
          tags: "6/7",
          evasions: "0/3",
        },
        {
          id: 61,
          name: "Jonathan Alfonseca",
          sm_handle: "@jonathanpk3",
          team: "SoFlo",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/soflo/jonathan_alfonseca.png",
          tags: "3/3",
          evasions: "3/9",
        },
        {
          id: 57,
          name: "Julian Halil",
          sm_handle: "@j_lion.soflo",
          team: "SoFlo",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/soflo/julian_halil.png",
          tags: "2/4",
          evasions: "1/3",
        },
        {
          id: 59,
          name: "Raul Muniz",
          sm_handle: "@ramun_noodles",
          team: "SoFlo",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/soflo/raul_muniz.png",
          tags: "5/5",
          evasions: "0/5",
        },
        {
          id: 6,
          name: "Brett Vance",
          sm_handle: "@brett_vance",
          team: "Tempest",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/tempest/brett_vance.png",
          tags: "0/3",
          evasions: "0/0",
        },
        {
          id: 4,
          name: "Erik Mukameshin",
          sm_handle: "@erik3run",
          team: "Tempest",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/tempest/erik_mukameshin.png",
          tags: "4/4",
          evasions: "0/4",
        },
        {
          id: 3,
          name: "Jeff Garrido",
          sm_handle: "@pkjeffie",
          team: "Tempest",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/tempest/jeff_garrido.png",
          tags: "3/3",
          evasions: "1/4",
        },
        {
          id: 98,
          name: "Christopher Piccirello",
          sm_handle: "@unknown_chrisp",
          team: "The Unknown Project",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/the_unknown_project/christopher_piccirello.png",
          tags: "4/5",
          evasions: "2/9",
        },
        {
          id: 96,
          name: "David Ehrlich",
          sm_handle: "@daviddostuff",
          team: "The Unknown Project",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/the_unknown_project/david_ehrlich.png",
          tags: "1/2",
          evasions: "0/1",
        },
        {
          id: 97,
          name: "Jesse Deliberti",
          sm_handle: "@yessi.unknown",
          team: "The Unknown Project",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/the_unknown_project/jesse_deliberti.png",
          tags: "2/3",
          evasions: "2/6",
        },
        {
          id: 68,
          name: "Alex Pawlus",
          sm_handle: "@alex.pawlus",
          team: "Try Hard Collective",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/try_hard_collective/alex_pawlus.png",
          tags: "4/6",
          evasions: "2/5",
        },
        {
          id: 63,
          name: "Casey Wilson",
          sm_handle: "@caseywlsn",
          team: "Try Hard Collective",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/try_hard_collective/casey_wilson.png",
          tags: "2/5",
          evasions: "0/4",
        },
        {
          id: 64,
          name: "Cian O\u2019Maitiu",
          sm_handle: "@cianomaitiu",
          team: "Try Hard Collective",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/try_hard_collective/cian_omaitiu.png",
          tags: "3/5",
          evasions: "5/9",
        },
        {
          id: 33,
          name: "Jose Jimenez",
          sm_handle: "@watchmestunt",
          team: "Team Empire",
          image: null,
          tags: "0/0",
          evasions: "0/0",
        },
        {
          id: 86,
          name: "Bryce Clarke",
          sm_handle: "@bryce.clarke.pk",
          team: "5 Borough",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/5_borough/bryce_clarke.png",
          tags: "2/4",
          evasions: "0/2",
        },
        {
          id: 85,
          name: "Deyvid Wolf Garcia",
          sm_handle: "@o.wolf.o",
          team: "5 Borough",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/5_borough/deyvid_wolf_garcia.png",
          tags: "3/4",
          evasions: "3/7",
        },
        {
          id: 101,
          name: "Adam Cole",
          sm_handle: "@acdoalme",
          team: "Antidote PK",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/antidote_pk/adam_cole.png",
          tags: "1/4",
          evasions: "0/2",
        },
        {
          id: 99,
          name: "Jeremy D Guarino",
          sm_handle: "@americantarzan",
          team: "Antidote PK",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/antidote_pk/jeremy_d_guarino.png",
          tags: "5/6",
          evasions: "1/4",
        },
        {
          id: 104,
          name: "Joe Savastano",
          sm_handle: "@jsavvy3",
          team: "Antidote PK",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/antidote_pk/joe_savastano.png",
          tags: "3/4",
          evasions: "0/5",
        },
        {
          id: 55,
          name: "Amos Rendao",
          sm_handle: "@amosrendao",
          team: "APEX",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apex/amos_rendao.png",
          tags: "2/2",
          evasions: "0/1",
        },
        {
          id: 50,
          name: "Jason Bergeron",
          sm_handle: "@jason.wu.b",
          team: "APEX",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apex/jason_bergeron.png",
          tags: "5/5",
          evasions: "2/5",
        },
        {
          id: 51,
          name: "Michael Sliger",
          sm_handle: "@michaelj.sliger",
          team: "APEX",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apex/michael_sliger.png",
          tags: "7/7",
          evasions: "7/14",
        },
        {
          id: 22,
          name: "Airic Wolff",
          sm_handle: "@airic_wolff",
          team: "APK Blue",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_blue/airic_wolff.png",
          tags: "3/5",
          evasions: "1/5",
        },
        {
          id: 24,
          name: "Jesse Harrison",
          sm_handle: "@jesse_flok",
          team: "APK Blue",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_blue/jesse_harrison.png",
          tags: "5/6",
          evasions: "1/7",
        },
        {
          id: 26,
          name: "Johnny Brown",
          sm_handle: "@jb_ninjaboy",
          team: "APK Blue",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_blue/johnny_brown.png",
          tags: "4/5",
          evasions: "3/7",
        },
        {
          id: 70,
          name: "Ashlee Johnson",
          sm_handle: "@coach___cease",
          team: "APK Grey",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_gray/ashlee_johnson.png",
          tags: "3/6",
          evasions: "0/2",
        },
        {
          id: 71,
          name: "Ethan Guzman",
          sm_handle: "@ethantwistz",
          team: "APK Grey",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_gray/ethan_guzman.png",
          tags: "14/16",
          evasions: "3/12",
        },
        {
          id: 73,
          name: "Frank Mejia",
          sm_handle: "@frnkmj4",
          team: "APK Grey",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_gray/frank_mejia.png",
          tags: "11/13",
          evasions: "2/11",
        },
        {
          id: 37,
          name: "Falco [unspecified]",
          sm_handle: "@falcoartflow",
          team: "Team Empire",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/empire/falco.png",
          tags: "5/5",
          evasions: "1/6",
        },
        {
          id: 36,
          name: "Jonathan Gordon",
          sm_handle: "@gordon.pk",
          team: "Team Empire",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/empire/jonathan_gordon.png",
          tags: "2/4",
          evasions: "1/3",
        },
        {
          id: 38,
          name: "Joshua Cisneros",
          sm_handle: "@tarzan.pk",
          team: "Team Empire",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/empire/joshua_cisneros.png",
          tags: "3/4",
          evasions: "0/4",
        },
        {
          id: 12,
          name: "Ben Spaloss",
          sm_handle: "@makethepre",
          team: "Enso Movement",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/enso_movement/ben_spaloss.png",
          tags: "2/5",
          evasions: "2/4",
        },
        {
          id: 9,
          name: "Christian Anderson",
          sm_handle: "@adept.anderson",
          team: "Enso Movement",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/enso_movement/christian_anderson.png",
          tags: "3/3",
          evasions: "2/6",
        },
        {
          id: 78,
          name: "Bear Schneider",
          sm_handle: "@bear.muvs",
          team: "GNF",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/gnf/bear_schneider.png",
          tags: "7/7",
          evasions: "1/8",
        },
        {
          id: 75,
          name: "Davis Vasconcellos",
          sm_handle: "@_davisvasconcellos_",
          team: "GNF",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/gnf/davis_vasconcellos.png",
          tags: "8/9",
          evasions: "7/15",
        },
        {
          id: 77,
          name: "Jake Migliorato",
          sm_handle: "@jake__unknown",
          team: "GNF",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/gnf/jake_migliorato.png",
          tags: "3/7",
          evasions: "1/5",
        },
        {
          id: 90,
          name: "Antonio Allen",
          sm_handle: "@antonio.moves",
          team: "Hollywood Freerunners",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hollywood_freeruners/antonio_allen.png",
          tags: "7/9",
          evasions: "2/8",
        },
        {
          id: 89,
          name: "Dale Smith",
          sm_handle: "@zion_ninja",
          team: "Hollywood Freerunners",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hollywood_freeruners/dale_smith.png",
          tags: "4/8",
          evasions: "0/4",
        },
        {
          id: 91,
          name: "Justin Sweeney",
          sm_handle: "@justin_moves",
          team: "Hollywood Freerunners",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hollywood_freeruners/justin_sweeney.png",
          tags: "4/7",
          evasions: "0/4",
        },
        {
          id: 16,
          name: "Alec Reduker",
          sm_handle: "@riqbic",
          team: "HUB PTC",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hub_ptc/alec_reduker.png",
          tags: "5/7",
          evasions: "1/7",
        },
        {
          id: 19,
          name: "Dominic Chavez",
          sm_handle: "@dominic__parkour",
          team: "HUB PTC",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hub_ptc/dominic_chavez.png",
          tags: "3/8",
          evasions: "1/3",
        },
        {
          id: 82,
          name: "Luciano Acuna Jr.",
          sm_handle: "@veganactionfigure",
          team: "5 Borough",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/5_borough/luciano_acuna_jr.png",
          tags: "5/6",
          evasions: "2/5",
        },
        {
          id: 81,
          name: "Mike Araujo",
          sm_handle: "@pyro4pk",
          team: "5 Borough",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/5_borough/mike_araujo.png",
          tags: "4/6",
          evasions: "1/5",
        },
        {
          id: 84,
          name: "Rich Rodriguez",
          sm_handle: "@riskyrichy",
          team: "5 Borough",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/5_borough/rich_rodriguez.png",
          tags: "3/4",
          evasions: "2/6",
        },
        {
          id: 83,
          name: "Sha Mualimm-Ak",
          sm_handle: "@sha.mualimmak",
          team: "5 Borough",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/5_borough/sha_mualimm-ak.png",
          tags: "6/6",
          evasions: "1/7",
        },
        {
          id: 102,
          name: "Jornathan Povea Pacheco",
          sm_handle: "@jmonk54",
          team: "Antidote PK",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/antidote_pk/jornathan_povea_pacheco.png",
          tags: "4/4",
          evasions: "0/4",
        },
        {
          id: 103,
          name: "Joshua Vigo",
          sm_handle: "@vigojosh",
          team: "Antidote PK",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/antidote_pk/josh_vigo.png",
          tags: "5/5",
          evasions: "4/10",
        },
        {
          id: 100,
          name: "Sean Law",
          sm_handle: "@seanlaw.pk",
          team: "Antidote PK",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/antidote_pk/sean_law.png",
          tags: "6/7",
          evasions: "4/9",
        },
        {
          id: 53,
          name: "Olof Wood",
          sm_handle: "@olofwood",
          team: "APEX",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apex/olof_wood.png",
          tags: "5/7",
          evasions: "1/6",
        },
        {
          id: 52,
          name: "Rob Schihl",
          sm_handle: "@rob_schihl",
          team: "APEX",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apex/rob_schihl.png",
          tags: "7/8",
          evasions: "10/15",
        },
        {
          id: 54,
          name: "Seth Wang",
          sm_handle: "@lieutenantmerkinator",
          team: "APEX",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apex/seth_wang.png",
          tags: "5/6",
          evasions: "2/7",
        },
        {
          id: 23,
          name: "Matthew \u1e04rother Wachtman",
          sm_handle: "@berwynpk",
          team: "APK Blue",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_blue/matthew_wachtman.png",
          tags: "4/5",
          evasions: "2/7",
        },
        {
          id: 25,
          name: "Sarin Suvanasai",
          sm_handle: "@sarinsuvanasai",
          team: "APK Blue",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_blue/sarin_suvanasai.png",
          tags: "8/11",
          evasions: "2/6",
        },
        {
          id: 21,
          name: "Travis Graves",
          sm_handle: "@travisnoblegraves",
          team: "APK Blue",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_blue/travis_graves.png",
          tags: "4/4",
          evasions: "0/4",
        },
        {
          id: 74,
          name: "Jay James",
          sm_handle: "@jayjamesrahyz",
          team: "APK Grey",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_gray/jay_james.png",
          tags: "4/8",
          evasions: "0/4",
        },
        {
          id: 72,
          name: "Mark Bowles",
          sm_handle: "@markjbowles",
          team: "APK Grey",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_gray/mark_bowles.png",
          tags: "7/8",
          evasions: "12/24",
        },
        {
          id: 69,
          name: "Wenxin Yang",
          sm_handle: "@wxyjumps",
          team: "APK Grey",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/apk_gray/wenxin_yang.png",
          tags: "3/8",
          evasions: "0/5",
        },
        {
          id: 35,
          name: "Kareem [unspecified]",
          sm_handle: "@reapgeniusofficial",
          team: "Team Empire",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/empire/kareem.png",
          tags: "4/5",
          evasions: "0/3",
        },
        {
          id: 34,
          name: "Steven Moffatt",
          sm_handle: "@steven_moffatt",
          team: "Team Empire",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/empire/steven_moffatt.png",
          tags: "4/4",
          evasions: "1/6",
        },
        {
          id: 10,
          name: "Gabriel Payne",
          sm_handle: "@lifeof.swerv",
          team: "Enso Movement",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/enso_movement/gabriel_payne.png",
          tags: "4/5",
          evasions: "0/4",
        },
        {
          id: 11,
          name: "Mitch Buynitski",
          sm_handle: "@mitch.moves",
          team: "Enso Movement",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/enso_movement/mitch_buynitski.png",
          tags: "0/3",
          evasions: "0/0",
        },
        {
          id: 14,
          name: "Ryan Mallon",
          sm_handle: "@ryanmallonpk",
          team: "Enso Movement",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/enso_movement/ryan_mallon.png",
          tags: "1/4",
          evasions: "0/1",
        },
        {
          id: 13,
          name: "Tegan Kelleher",
          sm_handle: "@teg.pk",
          team: "Enso Movement",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/enso_movement/tegan_kelleher.png",
          tags: "2/4",
          evasions: "0/2",
        },
        {
          id: 79,
          name: "Julius Porter",
          sm_handle: "@jewyjutsu",
          team: "GNF",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/gnf/julius_porter.png",
          tags: "4/8",
          evasions: "1/5",
        },
        {
          id: 80,
          name: "Michael Dario",
          sm_handle: "@dario_tpk",
          team: "GNF",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/gnf/michael_dario.png",
          tags: "1/3",
          evasions: "0/2",
        },
        {
          id: 76,
          name: "Seth Rujiraviriyapinyo",
          sm_handle: "@sethjumps",
          team: "GNF",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/gnf/seth_ruji.png",
          tags: "8/10",
          evasions: "4/10",
        },
        {
          id: 88,
          name: "Kyle Soderman",
          sm_handle: "@minnesoderman",
          team: "Hollywood Freerunners",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hollywood_freeruners/kyle_soderman.png",
          tags: "9/10",
          evasions: "17/27",
        },
        {
          id: 92,
          name: "Miguel Diaz",
          sm_handle: "@migueldiazpk",
          team: "Hollywood Freerunners",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hollywood_freeruners/miguel_diaz.png",
          tags: "6/7",
          evasions: "3/7",
        },
        {
          id: 87,
          name: "Omar Zaki",
          sm_handle: "@omarzaki0",
          team: "Hollywood Freerunners",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hollywood_freeruners/omar_zaki.png",
          tags: "2/5",
          evasions: "1/4",
        },
        {
          id: 15,
          name: "Dylan Polin",
          sm_handle: "@dylanpolin",
          team: "HUB PTC",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hub_ptc/dylan_polan.png",
          tags: "6/6",
          evasions: "1/7",
        },
        {
          id: 17,
          name: "Evan Beyer",
          sm_handle: "@mangoinmotion",
          team: "HUB PTC",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hub_ptc/evan_beyer.png",
          tags: "3/6",
          evasions: "1/5",
        },
        {
          id: 20,
          name: "Jeremiah Washington",
          sm_handle: "@jeremiah_fw",
          team: "HUB PTC",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hub_ptc/jeremiah_washington.png",
          tags: "7/8",
          evasions: "2/9",
        },
        {
          id: 18,
          name: "Sparsha Pun",
          sm_handle: "@spar.kour",
          team: "HUB PTC",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/hub_ptc/sparsha_pun.png",
          tags: "4/6",
          evasions: "4/8",
        },
        {
          id: 31,
          name: "Kaden Harbaugh",
          sm_handle: "@_kdon_",
          team: "No Cap",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/no_cap/kaden_harbaugh.png",
          tags: "2/6",
          evasions: "1/3",
        },
        {
          id: 30,
          name: "Mickael Franko",
          sm_handle: "@danko__franko",
          team: "No Cap",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/no_cap/michael_franko.png",
          tags: "4/6",
          evasions: "0/5",
        },
        {
          id: 29,
          name: "Wes Preston",
          sm_handle: "@wes_pres",
          team: "No Cap",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/no_cap/wes_preston.png",
          tags: "6/6",
          evasions: "1/7",
        },
        {
          id: 46,
          name: "Luke Anderson",
          sm_handle: "@goobgram",
          team: "OLLO",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/ollo/luke_anderson.png",
          tags: "1/4",
          evasions: "1/2",
        },
        {
          id: 49,
          name: "Luke Mizel",
          sm_handle: "@lukemizel",
          team: "OLLO",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/ollo/luke_mizel.png",
          tags: "3/6",
          evasions: "1/6",
        },
        {
          id: 48,
          name: "Stephen McCarty",
          sm_handle: "@yungsteezus713",
          team: "OLLO",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/ollo/stephen_mccarty.png",
          tags: "11/12",
          evasions: "3/12",
        },
        {
          id: 60,
          name: "Shawn Foley",
          sm_handle: "@shawn.foley.pk",
          team: "SoFlo",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/soflo/shawn_foley.png",
          tags: "4/6",
          evasions: "1/4",
        },
        {
          id: 56,
          name: "Tony Roth",
          sm_handle: "@tony.soflo",
          team: "SoFlo",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/soflo/tony_roth.png",
          tags: "0/4",
          evasions: "0/0",
        },
        {
          id: 58,
          name: "Tyler Gatewood",
          sm_handle: "@tyler.soflo",
          team: "SoFlo",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/soflo/tyler_gatewood.png",
          tags: "0/3",
          evasions: "0/0",
        },
        {
          id: 5,
          name: "Nate Weston",
          sm_handle: "@nate_weston",
          team: "Tempest",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/tempest/nate_weston.png",
          tags: "4/5",
          evasions: "1/6",
        },
        {
          id: 7,
          name: "Nicodemus Zicari",
          sm_handle: "@whoisnicodemus",
          team: "Tempest",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/tempest/nicodemus_zicari.png",
          tags: "2/4",
          evasions: "0/2",
        },
        {
          id: 2,
          name: "Tavon McVey",
          sm_handle: "@tavonflows",
          team: "Tempest",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/tempest/tavon_mcvey.png",
          tags: "5/5",
          evasions: "0/5",
        },
        {
          id: 94,
          name: "Joseph Rizzo",
          sm_handle: "@mr_rizzzo",
          team: "The Unknown Project",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/the_unknown_project/joseph_rizzo.png",
          tags: "8/9",
          evasions: "1/6",
        },
        {
          id: 93,
          name: "Laine Cammarata",
          sm_handle: "@unknown__snowflake",
          team: "The Unknown Project",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/the_unknown_project/laine_cammarata.png",
          tags: "5/5",
          evasions: "3/7",
        },
        {
          id: 95,
          name: "Vincent Vinciguerra",
          sm_handle: "@ponderingmacaque",
          team: "The Unknown Project",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/the_unknown_project/vincent_vinciguerra.png",
          tags: "3/5",
          evasions: "0/3",
        },
        {
          id: 67,
          name: "Dante Grazioli",
          sm_handle: "@dantegrazioli",
          team: "Try Hard Collective",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/try_hard_collective/dante_grazioli.png",
          tags: "2/5",
          evasions: "0/2",
        },
        {
          id: 65,
          name: "Elijah Muller",
          sm_handle: "@elijahmuller",
          team: "Try Hard Collective",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/try_hard_collective/elijah_muller.png",
          tags: "1/5",
          evasions: "0/1",
        },
        {
          id: 66,
          name: "Ross Allen",
          sm_handle: "@rossallenpk",
          team: "Try Hard Collective",
          image:
            "https://wct-athlete-images.s3.us-east-2.amazonaws.com/try_hard_collective/ross_allen.png",
          tags: "3/5",
          evasions: "2/5",
        },
      ],
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: left;
  padding-left: 50px;
  font-family: "Lucida Console", "Courier New", monospace;
  text-decoration: underline;
  text-decoration-color: red;
}
.p-col {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.team {
  text-align: right;
  padding-right: 15px;
}

.sm_handle {
  text-align: left;
  padding-bottom: 15px;
  font-size: 0.8em;
}

.athletes-detail {
  padding: 15px;
  text-align: center;

  background-color: white;
}

.athletes-title-wrap {
  height: 70%;
  width: 100%;
  background-color: rgb(240, 239, 239);
}
h4 {
  padding-top: 13px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
}

.athletes-image-wrap {
  width: 180px;
  background-color: white;
  padding: 13px;
}

.box {
  text-align: center;
  border-radius: 4px;

  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

.vertical-container {
  padding: 15px;
  margin: 5px;
  width: 100%;
  /*height: 80px;*/

  justify-content: space-evenly;
}
</style>
