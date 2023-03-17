import letter from '../models/letter'
import alif from '../assets/letters/alif.mp3'
import ba from '../assets/letters/ba.mp3'
import ta from '../assets/letters/ta.mp3'
import tha from '../assets/letters/tha.mp3'
import jim from '../assets/letters/jim.mp3'
import hha from '../assets/letters/hha.mp3'
import kha from '../assets/letters/kha.mp3'
import dal from '../assets/letters/dal.mp3'
import dhal from '../assets/letters/dhal.mp3'
import ra from '../assets/letters/ra.mp3'
import zay from '../assets/letters/zay.mp3'
import sin from '../assets/letters/sin.mp3'
import shin from '../assets/letters/shin.mp3'
import ssad from '../assets/letters/ssad.mp3'
import ddad from '../assets/letters/ddad.mp3'
import tta from '../assets/letters/tta.mp3'
import zza from '../assets/letters/zza.mp3'
import ayn from '../assets/letters/ayn.mp3'
import ghayn from '../assets/letters/ghayn.mp3'
import fa from '../assets/letters/fa.mp3'
import qaf from '../assets/letters/qaf.mp3'
import kaf from '../assets/letters/kaf.mp3'
import lam from '../assets/letters/lam.mp3'
import mim from '../assets/letters/mim.mp3'
import nun from '../assets/letters/nun.mp3'
import ha from '../assets/letters/ha.mp3'
import waw from '../assets/letters/waw.mp3'
import ya from '../assets/letters/ya.mp3'

const letters: letter[] = [
  {
    name: 'alif',
    sound: alif,
    isolated: 'ا',
    initial: 'ا',
    medial: 'ـا',
    final: 'ـا',
  },
  {
    name: 'bā',
    sound: ba,
    isolated: 'ب',
    initial: 'بـ',
    medial: 'ـبـ',
    final: 'ـب',
  },
  {
    name: 'tā',
    sound: ta,
    isolated: 'ت',
    initial: 'تـ',
    medial: 'ـتـ',
    final: 'ـت',
  },
  {
    name: 'thā',
    sound: tha,
    isolated: 'ث',
    initial: 'ثـ',
    medial: 'ـثـ',
    final: 'ـث',
  },
  {
    name: 'jīm',
    sound: jim,
    isolated: 'ج',
    initial: 'جـ',
    medial: 'ـجـ',
    final: 'ـج',
  },
  {
    name: 'ḥa',
    sound: hha,
    isolated: 'ح',
    initial: 'حـ',
    medial: 'ـحـ',
    final: 'ـح',
  },
  {
    name: 'kha',
    sound: kha,
    isolated: 'خ',
    initial: 'خـ',
    medial: 'ـخـ',
    final: 'ـخ',
  },
  {
    name: 'dāl',
    sound: dal,
    isolated: 'د',
    initial: 'د',
    medial: 'ـد',
    final: 'ـد',
  },
  {
    name: 'dhāl',
    sound: dhal,
    isolated: 'ذ',
    initial: 'ذ',
    medial: 'ـذ',
    final: 'ـذ',
  },
  {
    name: 'rā',
    sound: ra,
    isolated: 'ر',
    initial: 'ر',
    medial: 'ـر',
    final: 'ـر',
  },
  {
    name: 'zay',
    sound: zay,
    isolated: 'ز',
    initial: 'ز',
    medial: 'ـز',
    final: 'ـز',
  },
  {
    name: 'sīn',
    sound: sin,
    isolated: 'س',
    initial: 'سـ',
    medial: 'ـسـ',
    final: 'ـس',
  },
  {
    name: 'shīn',
    sound: shin,
    isolated: 'ش',
    initial: 'شـ',
    medial: 'ـشـ',
    final: 'ـش',
  },
  {
    name: 'ṣād',
    sound: ssad,
    isolated: 'ص',
    initial: 'صـ',
    medial: 'ـصـ',
    final: 'ـص',
  },
  {
    name: 'ḍād',
    sound: ddad,
    isolated: 'ض',
    initial: 'ضـ',
    medial: 'ـضـ',
    final: 'ـض',
  },
  {
    name: 'ṭā',
    sound: tta,
    isolated: 'ط',
    initial: 'طـ',
    medial: 'ـطـ',
    final: 'ـط',
  },
  {
    name: 'ẓā',
    sound: zza,
    isolated: 'ظ',
    initial: 'ظـ',
    medial: 'ـظـ',
    final: 'ـظ',
  },
  {
    name: 'ayn',
    sound: ayn,
    isolated: 'ع',
    initial: 'عـ',
    medial: 'ـعـ',
    final: 'ـع',
  },
  {
    name: 'ghayn',
    sound: ghayn,
    isolated: 'غ',
    initial: 'غـ',
    medial: 'ـغـ',
    final: 'ـغ',
  },
  {
    name: 'fā',
    sound: fa,
    isolated: 'ف',
    initial: 'فـ',
    medial: 'ـقـ',
    final: 'ـف',
  },
  {
    name: 'qāf',
    sound: qaf,
    isolated: 'ق',
    initial: 'قـ',
    medial: 'ـقـ',
    final: 'ـق',
  },
  {
    name: 'kāf',
    sound: kaf,
    isolated: 'ﻙ',
    initial: 'كـ',
    medial: 'ـكـ',
    final: 'ـك',
  },
  {
    name: 'lām',
    sound: lam,
    isolated: 'ﻝ',
    initial: 'لـ',
    medial: 'ـلـ',
    final: 'ـل',
  },
  {
    name: 'mīm',
    sound: mim,
    isolated: 'ﻡ',
    initial: 'مـ',
    medial: 'ـمـ',
    final: 'ـم',
  },
  {
    name: 'nūn',
    sound: nun,
    isolated: 'ن',
    initial: 'نـ',
    medial: 'ـنـ',
    final: 'ـن',
  },
  {
    name: 'hā',
    sound: ha,
    isolated: 'ه',
    initial: 'هـ',
    medial: 'ـهـ',
    final: 'ـه',
  },
  {
    name: 'wāw',
    sound: waw,
    isolated: 'ﻭ',
    initial: 'و',
    medial: 'ـو',
    final: 'ـو',
  },
  {
    name: 'yā',
    sound: ya,
    isolated: 'ي',
    initial: 'يـ',
    medial: 'ـيـ',
    final: 'ـي',
  },
]

export default letters
