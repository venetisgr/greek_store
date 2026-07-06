import type { Locale } from '../i18n/ui';

export type Line = 'crete' | 'lakonia' | 'honey';

export interface Product {
  slug: string;
  line: Line;
  name: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  variety: Record<Locale, string>;
  region: Record<Locale, string>;
  /** Short label motto, e.g. "Myth. Mountain. Sea. Tradition." */
  motto: Record<Locale, string>;
  /** Signature pull-quote from the tin's back label. */
  quote: Record<Locale, string>;
  /** Package size line from the label. */
  size: Record<Locale, string>;
  /** Story paragraphs shown on the product page. */
  story: Record<Locale, string[]>;
  /** Product-specific claims shown as a badge row. */
  badges: Record<Locale, string[]>;
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
    motto: { en: 'Myth. Mountain. Sea. Tradition.', el: 'Μύθος. Βουνό. Θάλασσα. Παράδοση.' },
    quote: {
      en: 'This is not simply olive oil. It is Crete distilled: myth, mountain, sea, and the patience of a family that has never left the land.',
      el: 'Δεν είναι απλώς ελαιόλαδο. Είναι η Κρήτη αποσταγμένη: μύθος, βουνό, θάλασσα, και η υπομονή μιας οικογένειας που δεν άφησε ποτέ τη γη της.',
    },
    size: { en: '500 ml', el: '500 ml' },
    story: {
      en: [
        'On the same island where the Minoans pressed golden oil three thousand years ago — the land of King Minos, the labyrinth beneath Knossos, and the White Mountains standing guard above — our family still works the Koroneiki groves by hand.',
        'Crete’s olive has always shared its people’s character: the stubborn courage that met invader after invader on these mountainsides, and the plain, generous table that made the Cretan diet the world’s byword for long life.',
        'Every early-harvest bottle carries that inheritance, a fierce green oil, peppery and alive, cold-pressed within hours of picking, exactly as the generations before us did it.',
      ],
      el: [
        'Στο ίδιο νησί όπου οι Μινωίτες έβγαζαν χρυσό λάδι πριν από τρεις χιλιάδες χρόνια — στη γη του βασιλιά Μίνωα, του λαβύρινθου κάτω από την Κνωσό και των Λευκών Ορέων που στέκουν φρουροί από ψηλά — η οικογένειά μας εξακολουθεί να δουλεύει τα λιόφυτα της Κορωνέικης με το χέρι.',
        'Η ελιά της Κρήτης είχε πάντα τον χαρακτήρα των ανθρώπων της: το πεισματάρικο θάρρος που αντίκρισε κατακτητή μετά από κατακτητή σε τούτες τις πλαγιές, και το απλό, γενναιόδωρο τραπέζι που έκανε την κρητική διατροφή συνώνυμο της μακροζωίας.',
        'Κάθε μπουκάλι πρώιμης συγκομιδής κουβαλά αυτή την κληρονομιά: ένα λάδι πράσινο και ζωντανό, πιπεράτο, ψυχρής έκθλιψης μέσα σε ώρες από τη συλλογή, ακριβώς όπως το έκαναν οι γενιές πριν από εμάς.',
      ],
    },
    badges: {
      en: ['100% Koroneiki olives', 'Hand picked', 'Cold pressed within hours', 'All natural, no additives'],
      el: ['100% ελιές Κορωνέικης', 'Χειροσυλλογή', 'Ψυχρή έκθλιψη μέσα σε ώρες', 'Φυσικό, χωρίς πρόσθετα'],
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
    region: { en: 'Lakonia', el: 'Λακωνία' },
    motto: {
      en: 'Robust. Peppery. Rich in polyphenols.',
      el: 'Δυνατό. Πιπεράτο. Πλούσιο σε πολυφαινόλες.',
    },
    quote: {
      en: 'A Spartan spirit in every drop, and a family’s name standing behind it.',
      el: 'Σπαρτιατικό πνεύμα σε κάθε σταγόνα, και το όνομα μιας οικογένειας από πίσω του.',
    },
    size: { en: '500 ml', el: '500 ml' },
    story: {
      en: [
        'In Laconia, strength is the oldest tradition. This is the land of Sparta, of Leonidas and the Three Hundred, of warriors who answered the demand to lay down their arms with a single defiant phrase: come and take them.',
        'When Spartan power gave way to Rome, the free towns of the Laconian coast endured; when Byzantium rose, they raised the sea-fortress of Monemvasia on the rock.',
        'Through every age, the olive remained. On the slopes around Molaoi our family presses the Koroneiki olive, grown on these slopes since antiquity, into an oil as bold and unyielding as the people of this place: robust, peppery, rich in polyphenols, hand-harvested early and milled the same day.',
      ],
      el: [
        'Στη Λακωνία, η δύναμη είναι η αρχαιότερη παράδοση. Αυτή είναι η γη της Σπάρτης, του Λεωνίδα και των Τριακοσίων, των πολεμιστών που στην απαίτηση να καταθέσουν τα όπλα απάντησαν με μια μόνο φράση: μολών λαβέ.',
        'Όταν η σπαρτιατική δύναμη έδωσε τη θέση της στη Ρώμη, οι ελεύθερες πόλεις της λακωνικής ακτής άντεξαν· όταν υψώθηκε το Βυζάντιο, έχτισαν πάνω στον βράχο τη θαλασσινή καστροπολιτεία της Μονεμβασιάς.',
        'Σε κάθε εποχή, η ελιά έμεινε. Στις πλαγιές γύρω από τους Μολάους η οικογένειά μας εκθλίβει την Κορωνέικη ελιά, που μεγαλώνει σε αυτά τα χώματα από την αρχαιότητα, σε ένα λάδι τολμηρό και αλύγιστο σαν τους ανθρώπους του τόπου: δυνατό, πιπεράτο, πλούσιο σε πολυφαινόλες, μαζεμένο νωρίς στο χέρι και αλεσμένο την ίδια μέρα.',
      ],
    },
    badges: {
      en: ['100% Koroneiki olives', 'Hand picked', 'Cold pressed within hours', 'Rich in polyphenols'],
      el: ['100% ελιές Κορωνέικης', 'Χειροσυλλογή', 'Ψυχρή έκθλιψη μέσα σε ώρες', 'Πλούσιο σε πολυφαινόλες'],
    },
    image: null,
  },
  {
    slug: 'lakonia-athinaiki',
    line: 'lakonia',
    name: { en: 'Athena’s Gift', el: 'Το Δώρο της Αθηνάς' },
    subtitle: {
      en: 'Extra virgin olive oil — smooth, golden, gently fruity',
      el: 'Εξαιρετικό παρθένο ελαιόλαδο — απαλό, χρυσαφένιο, με ήπια φρουτώδη γεύση',
    },
    variety: { en: 'Athinaiki', el: 'Αθηναϊκή' },
    region: { en: 'Lakonia', el: 'Λακωνία' },
    motto: { en: 'Smooth. Golden. Gently fruity.', el: 'Απαλό. Χρυσαφένιο. Ήπια φρουτώδες.' },
    quote: {
      en: 'An Athenian gift in every drop, and a Laconian family’s name standing behind it.',
      el: 'Ένα αθηναϊκό δώρο σε κάθε σταγόνα, και το όνομα μιας λακωνικής οικογένειας από πίσω του.',
    },
    size: { en: '500 ml', el: '500 ml' },
    story: {
      en: [
        'Athens and Sparta agreed on nothing — except the olive. When Athena won her city with the first olive tree, a gift judged greater than Poseidon’s spring of salt water, even Sparta bowed to the giver: on their own acropolis the Spartans built her a temple of bronze.',
        'Time settled the old quarrel. Spartan power passed to Rome, Rome to Byzantium; on the Laconian coast the sea-fortress of Monemvasia rose upon its rock. The rival cities faded into memory; the goddess’s tree stayed, silver-leaved, on the same slopes.',
        'Through every age, the gift remained. On the slopes around Molaoi our family grows the Athinaiki olive, the variety that bears Athena’s name, and presses it into the other soul of Laconia: an oil smooth, golden, and gently fruity — soft where the Koroneiki is stern. It does not command the table; it lets vegetables, fish, and fresh bread speak. Hand-harvested, cold-pressed the same day.',
      ],
      el: [
        'Η Αθήνα και η Σπάρτη δεν συμφώνησαν ποτέ σε τίποτα — εκτός από την ελιά. Όταν η Αθηνά κέρδισε την πόλη της με το πρώτο δέντρο ελιάς, δώρο που κρίθηκε ανώτερο από την αλμυρή πηγή του Ποσειδώνα, ακόμη και η Σπάρτη υποκλίθηκε στη δωρήτρια: στη δική τους ακρόπολη οι Σπαρτιάτες τής έχτισαν χάλκινο ναό.',
        'Ο χρόνος έκλεισε την παλιά αντιπαλότητα. Η σπαρτιατική δύναμη πέρασε στη Ρώμη, η Ρώμη στο Βυζάντιο· στη λακωνική ακτή υψώθηκε πάνω στον βράχο της η καστροπολιτεία της Μονεμβασιάς. Οι αντίπαλες πόλεις έσβησαν στη μνήμη· το δέντρο της θεάς έμεινε, ασημόφυλλο, στις ίδιες πλαγιές.',
        'Σε κάθε εποχή, το δώρο έμεινε. Στις πλαγιές γύρω από τους Μολάους η οικογένειά μας καλλιεργεί την Αθηναϊκή ελιά, την ποικιλία που φέρει το όνομα της θεάς, και την εκθλίβει στην άλλη ψυχή της Λακωνίας: ένα λάδι απαλό, χρυσαφένιο, με ήπια φρουτώδη γεύση — μαλακό εκεί που η Κορωνέικη είναι αυστηρή. Δεν κυριαρχεί στο τραπέζι· αφήνει τα λαχανικά, το ψάρι και το φρέσκο ψωμί να μιλήσουν. Χειροσυλλογή, ψυχρή έκθλιψη την ίδια μέρα.',
      ],
    },
    badges: {
      en: ['100% Athinaiki olives', 'Hand picked', 'Cold pressed within hours', 'All natural, no additives'],
      el: ['100% ελιές Αθηναϊκής', 'Χειροσυλλογή', 'Ψυχρή έκθλιψη μέσα σε ώρες', 'Φυσικό, χωρίς πρόσθετα'],
    },
    image: null,
  },
  {
    slug: 'honey',
    line: 'honey',
    name: { en: 'Greek Honey', el: 'Ελληνικό Μέλι' },
    subtitle: {
      en: 'Raw thyme honey from the Chania countryside',
      el: 'Αγνό θυμαρίσιο μέλι από την ύπαιθρο των Χανίων',
    },
    variety: { en: 'Thyme', el: 'Θυμαρίσιο' },
    region: { en: 'Chania, Crete', el: 'Χανιά, Κρήτη' },
    motto: { en: 'Wild thyme. Raw. Unblended.', el: 'Άγριο θυμάρι. Αγνό. Χωρίς αναμείξεις.' },
    quote: {
      en: 'Made by the bees of Chania; we only keep it safe on its way to your table.',
      el: 'Το φτιάχνουν οι μέλισσες των Χανίων· εμείς απλώς το φυλάμε στον δρόμο για το τραπέζι σας.',
    },
    size: { en: 'Jar sizes to be announced', el: 'Τα μεγέθη βάζων θα ανακοινωθούν' },
    story: {
      en: [
        'From hives kept among the wild thyme of the Chania countryside, our honey comes to the jar the way the bees made it: raw, unheated, and unblended.',
        'Gathered at the height of the thyme flowering, it carries a concentration of thyme far beyond what is usually sold as thyme honey — dense, aromatic, unmistakable from the first spoonful.',
        'Jar sizes are coming soon. Ask us when you order and we will tell you what is in the current batch.',
      ],
      el: [
        'Από κυψέλες ανάμεσα στο άγριο θυμάρι της υπαίθρου των Χανίων, το μέλι μας φτάνει στο βάζο όπως το έφτιαξαν οι μέλισσες: αγνό, αθέρμαντο και χωρίς αναμείξεις.',
        'Τρυγημένο στην κορύφωση της ανθοφορίας του θυμαριού, έχει περιεκτικότητα σε θυμάρι πολύ πάνω από ό,τι συνήθως πωλείται ως θυμαρίσιο μέλι — πυκνό, αρωματικό, αναγνωρίσιμο από την πρώτη κουταλιά.',
        'Τα μεγέθη βάζων θα ανακοινωθούν σύντομα. Ρωτήστε μας στην παραγγελία σας και θα σας πούμε τι περιέχει η τρέχουσα παρτίδα.',
      ],
    },
    badges: {
      en: ['Thyme honey', 'Exceptional thyme concentration', 'Raw and unheated', 'From family hives'],
      el: ['Θυμαρίσιο μέλι', 'Εξαιρετική περιεκτικότητα σε θυμάρι', 'Αγνό και αθέρμαντο', 'Από οικογενειακές κυψέλες'],
    },
    image: null,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
