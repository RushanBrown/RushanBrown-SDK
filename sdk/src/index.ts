import { Base } from "./base";
import { Books } from "./book";
import { Chapters } from "./chapter";
import { Characters } from "./character";
import { Movies } from "./movie";
import { Quotes } from "./quote";
import { applyMixins } from "./utils";

class LOTR extends Base {}
interface LOTR extends Books {}
interface LOTR extends Chapters {}
interface LOTR extends Characters {}
interface LOTR extends Movies {}
interface LOTR extends Quotes {}

applyMixins(LOTR, [Books, Chapters, Characters, Movies, Quotes]);

export default LOTR;
