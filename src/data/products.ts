import type { Locale } from '../i18n/ui';

export type Line = 'crete' | 'lakonia' | 'honey';

export interface Product {
  slug: string;
  line: Line;
  name: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  variety: Record<Locale, string>;
  region: Record<Locale, string>;
  /** Story paragraphs shown on the product page. */
  story: Record<Locale, string[]>;
  /** Path under /public, or null until real artwork is provided. */
  image: string | null;
}

export const products: Product[] = [
  {
    slug: 'chania-koroneiki',
    line: 'crete',
    name: { en: 'Cretan Legacy', el: 'Cretan Legacy' },
    subtitle: {
      en: 'Extra virgin olive oil — early harvest, cold pressed within hours of picking',
      el: 'Εξαιρετικό παρθένο ελαιόλαδο — πρώιμης συγκομιδής, ψυχρής έκθλιψης μέσα σε ώρες από τη συλλογή',
    },
    variety: { en: 'Koroneiki', el: 'Κορωνέικη' },
    region: { en: 'Chania, Crete', el: 'Χανιά, Κρήτη' },
    story: {
      en: [
        'On the same island where the Minoans pressed golden oil three thousand years ago — the land of King Minos, the labyrinth beneath Knossos, and the White Mountains standing guard above — our family still works the Koroneiki groves by hand.',
        'Crete’s olive has always shared its people’s character: the stubborn courage that met invader after invader on these mountainsides, and the plain, generous table that made the Cretan diet the world’s byword for long life.',
        'Every early-harvest bottle carries that inheritance: a fierce green oil, peppery and alive, cold-pressed within hours of picking, exactly as the generations before us did it. This is not simply olive oil. It is Crete distilled: myth, mountain, sea, and the patience of a family that has never left the land.',
      ],
      el: [
        'Στο ίδιο νησί όπου οι Μινωίτες έβγαζαν χρυσό λάδι πριν από τρεις χιλιάδες χρόνια — στη γη του βασιλιά Μίνωα, του λαβύρινθου κάτω από την Κνωσό και των Λευκών Ορέων που στέκουν φρουροί από ψηλά — η οικογένειά μας εξακολουθεί να δουλεύει τα λιόφυτα της Κορωνέικης με το χέρι.',
        'Η ελιά της Κρήτης είχε πάντα τον χαρακτήρα των ανθρώπων της: το πεισματάρικο θάρρος που αντίκρισε κατακτητή μετά από κατακτητή σε τούτες τις πλαγιές, και το απλό, γενναιόδωρο τραπέζι που έκανε την κρητική διατροφή συνώνυμο της μακροζωίας.',
        'Κάθε μπουκάλι πρώιμης συγκομιδής κουβαλά αυτή την κληρονομιά: ένα λάδι πράσινο και ζωντανό, πιπεράτο, ψυχρής έκθλιψης μέσα σε ώρες από τη συλλογή, ακριβώς όπως το έκαναν οι γενιές πριν από εμάς. Δεν είναι απλώς ελαιόλαδο. Είναι η Κρήτη αποσταγμένη: μύθος, βουνό, θάλασσα, και η υπομονή μιας οικογένειας που δεν άφησε ποτέ τη γη της.',
      ],
    },
    image: null,
  },
  {
    slug: 'lakonia-koroneiki',
    line: 'lakonia',
    name: { en: 'Laconian Legacy', el: 'Laconian Legacy' },
    subtitle: {
      en: 'Extra virgin olive oil — robust, peppery, rich in polyphenols',
      el: 'Εξαιρετικό παρθένο ελαιόλαδο — δυνατό, πιπεράτο, πλούσιο σε πολυφαινόλες',
    },
    variety: { en: 'Koroneiki', el: 'Κορωνέικη' },
    region: { en: 'Molaoi, Lakonia', el: 'Μολάοι, Λακωνία' },
    story: {
      en: [
        'In Laconia, strength is the oldest tradition. This is the land of Sparta, of Leonidas and the Three Hundred, of warriors who answered the demand to lay down their arms with a single defiant phrase: come and take them.',
        'When Spartan power gave way to Rome, the free towns of the Laconian coast endured; when Byzantium rose, they raised the sea-fortress of Monemvasia on the rock. Through every age, the olive remained.',
        'On the slopes around Molaoi our family presses the Koroneiki olive, grown on these slopes since antiquity, into an oil as bold and unyielding as the people of this place: robust, peppery, rich in polyphenols, hand-harvested early and milled the same day. A Spartan spirit in every drop, and a family’s name standing behind it.',
      ],
      el: [
        'Στη Λακωνία, η δύναμη είναι η αρχαιότερη παράδοση. Αυτή είναι η γη της Σπάρτης, του Λεωνίδα και των Τριακοσίων, των πολεμιστών που στην απαίτηση να καταθέσουν τα όπλα απάντησαν με μια μόνο φράση: μολών λαβέ.',
        'Όταν η σπαρτιατική δύναμη έδωσε τη θέση της στη Ρώμη, οι ελεύθερες πόλεις της λακωνικής ακτής άντεξαν· όταν υψώθηκε το Βυζάντιο, έχτισαν πάνω στον βράχο τη θαλασσινή καστροπολιτεία της Μονεμβασιάς. Σε κάθε εποχή, η ελιά έμεινε.',
        'Στις πλαγιές γύρω από τους Μολάους η οικογένειά μας εκθλίβει την Κορωνέικη ελιά, που μεγαλώνει σε αυτά τα χώματα από την αρχαιότητα, σε ένα λάδι τολμηρό και αλύγιστο σαν τους ανθρώπους του τόπου: δυνατό, πιπεράτο, πλούσιο σε πολυφαινόλες, μαζεμένο νωρίς στο χέρι και αλεσμένο την ίδια μέρα. Σπαρτιατικό πνεύμα σε κάθε σταγόνα, και το όνομα μιας οικογένειας από πίσω του.',
      ],
    },
    image: null,
  },
  {
    slug: 'lakonia-athinaiki',
    line: 'lakonia',
    name: { en: 'Laconian Legacy — Athinaiki', el: 'Laconian Legacy — Αθηναϊκή' },
    subtitle: {
      en: 'Extra virgin olive oil — smooth, golden, gently fruity',
      el: 'Εξαιρετικό παρθένο ελαιόλαδο — απαλό, χρυσαφένιο, με ήπια φρουτώδη γεύση',
    },
    variety: { en: 'Athinaiki', el: 'Αθηναϊκή' },
    region: { en: 'Lakonia', el: 'Λακωνία' },
    story: {
      en: [
        'Beside the bold Koroneiki, Lakonia keeps a gentler secret: the Athinaiki olive, a variety at home on these hillsides for generations.',
        'Where the Koroneiki strikes with pepper and fire, the Athinaiki flows smooth and golden — a soft, rounded oil with a gentle fruitiness that lets vegetables, fish, and fresh bread speak for themselves.',
        'The same family, the same slopes, the same patience: hand-harvested, cold-pressed the day it is picked, and bottled without compromise.',
      ],
      el: [
        'Δίπλα στη δυναμική Κορωνέικη, η Λακωνία κρατά ένα πιο απαλό μυστικό: την Αθηναϊκή ελιά, μια ποικιλία ριζωμένη σε αυτές τις πλαγιές εδώ και γενιές.',
        'Εκεί που η Κορωνέικη χτυπά με πιπέρι και φωτιά, η Αθηναϊκή κυλά απαλή και χρυσαφένια — ένα μαλακό, στρογγυλό λάδι με ήπια φρουτώδη γεύση, που αφήνει τα λαχανικά, το ψάρι και το φρέσκο ψωμί να μιλήσουν από μόνα τους.',
        'Η ίδια οικογένεια, οι ίδιες πλαγιές, η ίδια υπομονή: χειροσυλλογή, ψυχρή έκθλιψη την ίδια μέρα, εμφιάλωση χωρίς συμβιβασμούς.',
      ],
    },
    image: null,
  },
  {
    slug: 'honey',
    line: 'honey',
    name: { en: 'Greek Honey', el: 'Ελληνικό Μέλι' },
    subtitle: {
      en: 'Raw honey from the Greek countryside',
      el: 'Αγνό μέλι από την ελληνική ύπαιθρο',
    },
    variety: { en: 'To be announced', el: 'Θα ανακοινωθεί' },
    region: { en: 'Greece', el: 'Ελλάδα' },
    story: {
      en: [
        'From hives kept among wild herbs and blossom, our honey comes to the jar the way the bees made it: raw, unheated, and unblended.',
        'Full details of this harvest — variety, region, and jar sizes — are coming soon. Ask us when you order and we will tell you what is in the current batch.',
      ],
      el: [
        'Από κυψέλες ανάμεσα σε αγριοβότανα και ανθούς, το μέλι μας φτάνει στο βάζο όπως το έφτιαξαν οι μέλισσες: αγνό, αθέρμαντο και χωρίς αναμείξεις.',
        'Οι πλήρεις λεπτομέρειες αυτής της σοδειάς — ποικιλία, περιοχή και μεγέθη βάζων — έρχονται σύντομα. Ρωτήστε μας στην παραγγελία σας και θα σας πούμε τι περιέχει η τρέχουσα παρτίδα.',
      ],
    },
    image: null,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
