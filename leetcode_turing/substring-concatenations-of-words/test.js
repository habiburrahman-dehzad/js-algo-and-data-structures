const { findSubstring } = require('./slidingWindowApproach');

test('should be a function', () => {
  expect(typeof findSubstring).toEqual('function');
});

test('should return an arry of two integers', () => {
  const result = findSubstring('barfoothefoobarman', ['foo', 'bar']);
  expect(result).toHaveLength(2);
  expect(result).toMatchObject([0, 9]);
});

test('should return an arry of two integers', () => {
  const result = findSubstring('dadcdaad', ['da', 'dc']);
  expect(result).toHaveLength(2);
  expect(result).toMatchObject([0, 2]);
});

test('should return an empty array', () => {
  const result = findSubstring('wordgoodgoodgoodbestword', [
    'word',
    'good',
    'best',
    'word',
  ]);
  expect(result).toHaveLength(0);
});

test('should return an arry of three integers', () => {
  const result = findSubstring('barfoofoobarthefoobarman', [
    'bar',
    'foo',
    'the',
  ]);
  expect(result).toMatchObject([6, 9, 12]);
});

test('should return an arry of one integer', () => {
  const result = findSubstring('a', ['a']);
  expect(result).toHaveLength(1);
  expect(result).toMatchObject([0]);
});

test('should return an arry of one integer', () => {
  const result = findSubstring('bccbcc', ['bc', 'cc', 'cb']);
  expect(result).toHaveLength(1);
  expect(result).toMatchObject([0]);
});

test('should return the correct arry of integers', () => {
  const result = findSubstring('bcabbcaabbccacacbabccacaababcbb', [
    'c',
    'b',
    'a',
    'c',
    'a',
    'a',
    'a',
    'b',
    'c',
  ]);
  // [6,16,17,18,19,20]
  expect(result).toHaveLength(6);
  expect(result).toMatchObject([6, 16, 17, 18, 19, 20]);
});

test('should return the correct result', () => {
  const result = findSubstring('aaaaaaaaaaaaaa', ['aa', 'aa']);

  expect(result).toMatchObject([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('should return the correct result', () => {
  const result = findSubstring(
    'ttqupktjvqeeylzkyirjnnjuhyrmrhwkaoepyzavshbquaasltdyimtpmmddtzotnsknsnkkumcooeizxmyfyrwlfbqyaetpzdetsodmahcpllqizopzhnmmodkqhdfijjbbxgqansryfhiewzgfmsscvcsfizntkpukvkkjfbjmkutitzoirgmpkfuughnrykbuwnfbqqqckjlgizqbhcqtjkosudlunookbvntodvymggwhyaodqkodygzbrtpfkbifodtszughcdpdffgvpwapdzrwtiefjomxsirrcyygdpjixrfmogctfvpafvfqksncchtgftmklysipxudfyynvoncjvsvpixrpsxumlexjyfbxbgdcfqzvfcgcuctczmtsjngxtdgtkjrnqwrxorsvvyaratwcgpurfaoyfxurgneylyvzrpwmowdqqzsyropwqewvbqojfvkqtfrkxowlmbdcdycumssdwoazhpkmkufdcwpzmnmzopdtngpcyhfwyfxhuhvecajexyfjlrkcioxywnauwfsumpbhwxnazzgwzlincurnioleblaysssejwngvdgucntdadqdxhqgwdmxonxghsmrqazldhfhuakvdbabksjgvvglkdtuxhlnhkymtgtogglmhnnrhwaetgrelkyjrlwbxxnqfjgnptzygmrpkrtezkklwiwqvursrgkyrrmgklgtaykmpgqpsacpkyhfsazmgkkadygnmnioltaczrtrtvigvpnqrncazoacpirbvapivpnwigpeeykzpxphmtjlkjnzrhaphrxeimartpxxphyheoqtjzetiuszbuokloowaqnvhkuzttgzjwssxxmftggubxeoluknkzjtldsgyygjwyctxqaqwhmzeqqrmcewepsrvkyvjgfhehbezbwxkjxqbphoromxfepappwavdhzkkflociynhpowycqmrnsveumtsmovwqhgxsuzdvmkkdjihzxyoruvlioevfbtvjzsdwugritblcltdkrtbnonydtvkwofhnzljvtceodrqrktbendtdstinosjczrsbedwzgcolugcgagmpliudbdqqvbuxumyyquawxqhtwmzwsondwiizlapibmfyyfyoaymzouulivjajzfhhnhunyeqkmojrnztnmuciopqkyqtxxbgkkczihrttiemxdgkpaoxpdnzefudcxkohmpsvjlqrpdoujykjpjaszbygycjvozfarxyakorbrhvchhowtorsqpyotjlhlskcricbwveqecsllgiexbwpsxfmgqttldvcnzgmwkcaowmafwecxdrpcwdkoxezczeqbkexwiyleknlgtnfwgwaealtzpuboytrkxphfnumxhxfanmztizykktjbpnsqgjagyhnldzkkzpnmdohmpfwcaidqvvidhilfszrvadibvxnynvkccjgftmxqhftqnhwfgpdislmnkzmxwybbjigcudsdkouxvqfdhinzvzphbdezdfanpirjnmnxcjxxbccimpjjraqsdwrhbuwtencsbrrdaocdqenewxnpzfhdbamfwkybxatbumewbjatnnylmlamrjrumfzkpxloagputwqufsnuiliwzkkswbmiimszlgolmfhhdabisrfcenzfzjxvnmfxayxlgnzssgayidibwnfbceicqizfufcwfzjlmidhrffzlpchdikhotlgbllxsotxncicnnletsdehinmsyugthnuuyrmomjeoridfthannguvvhntdvomkkhjbtzpfdgyljfgrftgnqbjzqecltqwdxhhtgwymcyzoegfjblxrogqekurflpjkwqdfodttcuhgamrezqxpyovlkoqvezgcrljgpcztxizzwsfvjdmhthsdvlbbmjeeunmjsnervdsryyohbaqwjlzgwaiijmogbcrtpwmmbffzdtggvzcgkbngexqplfvmhpizlulmztmeoukmtmsdohlugclrjhgsyorjkfvmajqogbazntfdcsxjwlcfuiasytbjayvaklpqmprckwfppfynqctklvcjofupfpppbgfpwzrivzxmexawavglqkwgprxwgnmjttbrssaqrxexvetvbbitleacvxzcmnnigozbjzrazvauctrdxzzkdbnzyodndqvjhwmqydsxbstdokilljvqkkrjauydntpwpbmnhemixfnnrxyehtvrgmcgjamyvbulegalkpvjwiwqiwupsrgyglgplsphtjuarwldnhnkrlcziwqcqzawkinvbcewnawezkhmtwwkkamuxcwpbylngylhcpgpsevrocfhbeuleghbkdsobdbjdmrhezwydtrswwbzavkfdriqwbezehikwbrcaqagjrahnbgozsvelduheaglipveqogteizobzxoceebwbgifcrjdyunprrhgzamjzckaaadehgciomnrgzwevjvnccvbdhkekufkwkqdqumhhzynawtwfojhsgkxnucxqjhotzsluesdfsqgolcvbncttmriivgagppbphmjnhmsbeyqrclsrqnkcgvnbbnhqeihlxsygethktxbwlvnbjafpvstyicqmnyykqyqxrxhlxljigylpaqhxlavtemfrkfbcgtzzthmqsvaywlqwdxuozpjddrvpwysesrelasduqdvmqlivkemjwvozmjrlijrcavpdquxgxsspdckphyyfungiyxvignkjkboavlgugalldybmwzrsozbnxyvfniqyleahsjdyjpjmnkyjmrcarfpqfnxtvotgutpmetmoiwcxidgwwkxnpofvbdqwtjfnewcjpozzmbwxgftdpsshhaciduhwdmljinuaetbqxanffjiubddidfrgbyeemrqwfkyjeabdcrihatdbwhmzodhqdnwpemljzmudmyiqpqxpjcsflegajnsmaqdhfrsednjrlrhchgttinaushwdwqszgvgnmyrrnaiyrrcbxvwgjwcdfagcqybywjmkhfcvgkvzcacbvyjgxljcnsefqheoqszaxbvfnshrsjtqkcwhqgjdaqjsxphojgoihlowfxoyihqslmbbunhudqnahuqqcgylrohxlxxweposbstyfasishkbdbrfhsqbiaauxzqeogwrarpfuipmpaovdhambtnkvpguoyyeewwhqlmkvcyneoihyivzdjjyarvppttwsrdidpuytslzhtiheegjpskpjfgzacxstacwrwxnrkmagvhkzpvohffrkmslopfhpigigfvzpibvdiheadshixavlsgzhljyvrhewcflmhhprotrtnzcnbxyufadsjcqalwynbjaksrcjnvccwgrydssksvddztfkrdasocdhthqiculzbezgwrroowtoraaifaaucfdymvirpvsqarzwiqnymiodjpnorniwvnuhieayasqajpythnstwgyfxnvpdglythhclicnaspmkofrbxnxgnefbaueghcbqldetfrwahikxnbanqyveeafgxloepqxatbwbssbbcnapobehzzlfcsmzdadsqaumdqnykozmbaerbiackljmfvnkyseotzcyrpwcfyoiyscbdcfpqodxmqikioadndchsyjawziwsmzxpemhvrehhmrpdrtsuxzpxiruizscmubdapkvgoendvegpzylwacuitqstkwhexmfmwcumhjpeoxtnyfmyjgidwdygzfnzrunpwibfrtkhsfvqkjowpzzncxvbeiaxcombypgriszdywtkfkgujfjnceqgnrfrhruhjbyttxwrtqcaciunqdaskqbxjgqsalzjoyehxbbttftvpqifviafadeklxclicwwcbfbeiuxpquficmdmolmtryfobswfrujsckykhvaxphftvkfkvtdnskbvdaauujowvmjcjlzasgtnrazmvfbnrfkufkqbvgarsjtduvdobyduyfhumkjdpuawgqycxavrjqxflavpzyjzdsvpffvubvrhlrjkrgecxbjkdebcenekfzbmgwhhrapdtanmhrqguzqyfuclhgvoixbotkylmpqfrftyzjgtkzrrtwcacaqmxrdsbbfnsxujdnkeyqziptzkpemtedgdulxyofngciphxznwqnghiisxoessjaxelwczdrfgzvpzufxmsdwclozzurtesskdrofufkchhuiezfqtimvwcuxzntfhlrnefszmebvmvdsuiiprxkpbemcufhbtaozfiyuncpbxttubdjuawlecygwfqaaqqayzasmchpcciygljcofosioagvqgyjxyhwabkdkzhnjfvuqxiwlcgzdmvvvtgutpstqcybdfqomliditbuvhvavqyslemeueamiapngfbuskzbfaxcjudhldzyjmfdqfsbfhonpqihchkhkjjteoarrapbouggbahhiwuzoegsotzycktizwzswrvmlesneawoysnozwgnpfntrgescdnawimiohxvhtlhnzvmxdzokohbxnubrhcnrqxizwdiropfpmrmptazhkdexxiqgkgzcfjccmmtdcysqshgljhutkbtjjjrvrtzxcdbpquuuvmknvsafawymztykfphwihvnmwectywomjdibfnddnsfhqpohxkseifqgjvzhtpvcudgbslhgdmptbdbyptezaxgjshsnxnqtryvjjcrnoiirnlqdewcgvkppshdpvvkotfzcjrrzbarpljushwydjosbxvsuqcijkiovbfvcfottznlgmljvbcwzxqvouezeopcpvxtcnnvmaisoucjvehwdxstsyvymkadfzwiolfaoovcixofdvcivwcpuxpghqjprhzgteihsdlcczifvmosisjerymaqvpieoqxtygncsqeramomcgwupanqmngjfontgnoftejlunfuzvidceztgmlucsfhiscphrwbvforsvnurvzvzzohlabnugucaztiqpjnuzgpvtlmokhpjxwvzxkvfhyfgrnyjyndatsvodjcqstzrpwtohotqmaygqwpoluqgnluswyiqtkiigbwpprhetfmjddaqxqwmeshasrrlbbvietzvkhbeonpsqpioghckzjmubfhcgdmmwoijxjplxedpuofavimwtasugazodnbbblkyuzktepjafqccyqbsqtoyvnnadqcebmfvorruiawoqyqrotlgnbfirujuknynbfkrwblhdhvuhnnxhaewbjgsdrmpencismzrqlytuvnekcbtcfreqywtrjiwymeqbfjrqhknearpcukfaclsahmrswpqlvjmbsdtcnigpzxsukzwmkootchmbxeounavgfrkuzqkbqexadvmnlciojurgbfdohaworgirzsupwrrbmfqxhznqvgzwncnucjiuqtnpnhgmyxnmcejjdzbafaxtckpftazltocgvisvhihjmsurrwrxwqqzahgwhhjcvmlswdnelwnzokqggkdeavfdelbmsmopabhxfwbssquhcmpkwupzpuetihhctysuzzrgwubqmvxpjoziiohxlntvucxpcpjcrckpynflifautbccqjbdywasbxhdpthixuxwhehqljkfkojcxmhvlhpmhwryrzgptflajusvfecpsnurbdomldaucsstrykmdvmorhlwnpogcizelosyrtuvlmrembqrxeiqntnbjbjnlitywmxqhrlugeyugqmfwuvkpinylwowghvdvuveniyvnyqtocylytxnekopicoolltjfonuzmqmkghbkhoialvgxlyhpmvdxpmefzyenosawzbggrojcmrbzpipddscueicfhivxbvwcyclprutfnuedevijnngtvibeqwcttyytcjivfdaszhxdcimqvsjqakvtizobxmubxexchxvgeulhcyzxqkotxjofkejjrfkokhttfoclknunntkggazdlpkvttemzpdlwwgdmirwyljlhwrpwssihcddykrzzukxssdgbwdbjomqmghjyztiewnciedhbphvhmckihlrxykkgrvetooxmbbvieejtleaxinhryzpylzecwlvkzuwdvrlbwuwjaxjlmqckrrjcspfoacaaxxduqqwmksymrhxdzcortztooaepffrccwwsmuhynfkgokknmaghbcvpcagjfzljvkdjgkhvrucfgovsqbbrdxii',
    [
      'wxnazzgwzlincurnioleblays',
      'txwrtqcaciunqdaskqbxjgqsa',
      'vdhzkkflociynhpowycqmrnsv',
      'sondwiizlapibmfyyfyoaymzo',
      'advmnlciojurgbfdohaworgir',
      'gbwpprhetfmjddaqxqwmeshas',
      'vmjcjlzasgtnrazmvfbnrfkuf',
      'zjxvnmfxayxlgnzssgayidibw',
      'xmsdwclozzurtesskdrofufkc',
      'gglmhnnrhwaetgrelkyjrlwbx',
      'galldybmwzrsozbnxyvfniqyl',
      'ofrbxnxgnefbaueghcbqldetf',
      'ltaczrtrtvigvpnqrncazoacp',
      'psacpkyhfsazmgkkadygnmnio',
      'mztmeoukmtmsdohlugclrjhgs',
      'gjdaqjsxphojgoihlowfxoyih',
      'gpcztxizzwsfvjdmhthsdvlbb',
      'bksjgvvglkdtuxhlnhkymtgto',
      'mewbjatnnylmlamrjrumfzkpx',
      'orsqpyotjlhlskcricbwveqec',
      'wsrdidpuytslzhtiheegjpskp',
      'zehikwbrcaqagjrahnbgozsve',
      'lzjoyehxbbttftvpqifviafad',
      'phyyfungiyxvignkjkboavlgu',
      'zdadsqaumdqnykozmbaerbiac',
      'zxyoruvlioevfbtvjzsdwugri',
      'xtvotgutpmetmoiwcxidgwwkx',
      'cpvxtcnnvmaisoucjvehwdxst',
      'jfgzacxstacwrwxnrkmagvhkz',
      'nubrhcnrqxizwdiropfpmrmpt',
      'rwahikxnbanqyveeafgxloepq',
      'zncxvbeiaxcombypgriszdywt',
      'ottznlgmljvbcwzxqvouezeop',
      'rqguzqyfuclhgvoixbotkylmp',
      'zdsvpffvubvrhlrjkrgecxbjk',
      'kqbvgarsjtduvdobyduyfhumk',
      'azhkdexxiqgkgzcfjccmmtdcy',
      'igcudsdkouxvqfdhinzvzphbd',
      'igylpaqhxlavtemfrkfbcgtzz',
      'ezdfanpirjnmnxcjxxbccimpj',
      'hwydjosbxvsuqcijkiovbfvcf',
      'lzgwaiijmogbcrtpwmmbffzdt',
      'fsqgolcvbncttmriivgagppbp',
      'hsqbiaauxzqeogwrarpfuipmp',
      'mxonxghsmrqazldhfhuakvdba',
      'legajnsmaqdhfrsednjrlrhch',
      'eebwbgifcrjdyunprrhgzamjz',
      'suxzpxiruizscmubdapkvgoen',
      'uvnekcbtcfreqywtrjiwymeqb',
      'pquuuvmknvsafawymztykfphw',
      'bhxfwbssquhcmpkwupzpuetih',
      'pshdpvvkotfzcjrrzbarpljus',
      'edgdulxyofngciphxznwqnghi',
      'pwzrivzxmexawavglqkwgprxw',
      'wimiohxvhtlhnzvmxdzokohbx',
      'sjcqalwynbjaksrcjnvccwgry',
      'qwfkyjeabdcrihatdbwhmzodh',
      'thmqsvaywlqwdxuozpjddrvpw',
      'jdpuawgqycxavrjqxflavpzyj',
      'xphftvkfkvtdnskbvdaauujow',
      'mwkcaowmafwecxdrpcwdkoxez',
      'rrlbbvietzvkhbeonpsqpiogh',
      'gyglgplsphtjuarwldnhnkrlc',
      'sqshgljhutkbtjjjrvrtzxcdb',
      'ihvnmwectywomjdibfnddnsfh',
      'dymvirpvsqarzwiqnymiodjpn',
      'evrocfhbeuleghbkdsobdbjdm',
      'sbbfnsxujdnkeyqziptzkpemt',
      'gmlucsfhiscphrwbvforsvnur',
      'nfbceicqizfufcwfzjlmidhrf',
      'tbqxanffjiubddidfrgbyeemr',
      'fszmebvmvdsuiiprxkpbemcuf',
      'ziwqcqzawkinvbcewnawezkhm',
      'dmolmtryfobswfrujsckykhva',
      'ewcflmhhprotrtnzcnbxyufad',
      'qcebmfvorruiawoqyqrotlgnb',
      'qdnwpemljzmudmyiqpqxpjcsf',
      'xhaewbjgsdrmpencismzrqlyt',
      'iyrrcbxvwgjwcdfagcqybywjm',
      'rhezwydtrswwbzavkfdriqwbe',
      'kljmfvnkyseotzcyrpwcfyoiy',
      'xtygncsqeramomcgwupanqmng',
      'uzoegsotzycktizwzswrvmles',
      'fzlpchdikhotlgbllxsotxnci',
      'rrwrxwqqzahgwhhjcvmlswdne',
      'xtckpftazltocgvisvhihjmsu',
      'aovdhambtnkvpguoyyeewwhql',
      'qenewxnpzfhdbamfwkybxatbu',
      'wqvursrgkyrrmgklgtaykmpgq',
      'ezbwxkjxqbphoromxfepappwa',
      'mzeqqrmcewepsrvkyvjgfhehb',
      'ulzbezgwrroowtoraaifaaucf',
      'rdxzzkdbnzyodndqvjhwmqyds',
      'qtryvjjcrnoiirnlqdewcgvkp',
      'slemeueamiapngfbuskzbfaxc',
      'ssejwngvdgucntdadqdxhqgwd',
      'lhgdmptbdbyptezaxgjshsnxn',
      'qheoqszaxbvfnshrsjtqkcwhq',
      'twwkkamuxcwpbylngylhcpgps',
      'fszrvadibvxnynvkccjgftmxq',
      'hftqnhwfgpdislmnkzmxwybbj',
      'iimszlgolmfhhdabisrfcenzf',
      'mztizykktjbpnsqgjagyhnldz',
      'eacvxzcmnnigozbjzrazvauct',
      'hkhkjjteoarrapbouggbahhiw',
      'uknkzjtldsgyygjwyctxqaqwh',
      'lduheaglipveqogteizobzxoc',
      'ggvzcgkbngexqplfvmhpizlul',
      'omjeoridfthannguvvhntdvom',
      'uulivjajzfhhnhunyeqkmojrn',
      'npofvbdqwtjfnewcjpozzmbwx',
      'altzpuboytrkxphfnumxhxfan',
      'scbdcfpqodxmqikioadndchsy',
      'jfontgnoftejlunfuzvidcezt',
      'pvohffrkmslopfhpigigfvzpi',
      'kkhjbtzpfdgyljfgrftgnqbjz',
      'sllgiexbwpsxfmgqttldvcnzg',
      'exyfjlrkcioxywnauwfsumpbh',
      'hkuzttgzjwssxxmftggubxeol',
      'gftdpsshhaciduhwdmljinuae',
      'uzktepjafqccyqbsqtoyvnnad',
      'fnzrunpwibfrtkhsfvqkjowpz',
      'gpvtlmokhpjxwvzxkvfhyfgrn',
      'hgamrezqxpyovlkoqvezgcrlj',
      'qslmbbunhudqnahuqqcgylroh',
      'otchmbxeounavgfrkuzqkbqex',
      'lcczifvmosisjerymaqvpieoq',
      'ljvtceodrqrktbendtdstinos',
      'jlkjnzrhaphrxeimartpxxphy',
      'judhldzyjmfdqfsbfhonpqihc',
      'lxrogqekurflpjkwqdfodttcu',
      'firujuknynbfkrwblhdhvuhnn',
      'cnnletsdehinmsyugthnuuyrm',
      'stqcybdfqomliditbuvhvavqy',
      'ckzjmubfhcgdmmwoijxjplxed',
      'ttiemxdgkpaoxpdnzefudcxko',
      'jiuqtnpnhgmyxnmcejjdzbafa',
      'eumtsmovwqhgxsuzdvmkkdjih',
      'irbvapivpnwigpeeykzpxphmt',
      'czeqbkexwiyleknlgtnfwgwae',
      'eklxclicwwcbfbeiuxpquficm',
      'xatbwbssbbcnapobehzzlfcsm',
      'ztnmuciopqkyqtxxbgkkczihr',
      'heoqtjzetiuszbuokloowaqnv',
      'vbdhkekufkwkqdqumhhzynawt',
      'fjrqhknearpcukfaclsahmrsw',
      'xlxxweposbstyfasishkbdbrf',
      'qfrftyzjgtkzrrtwcacaqmxrd',
      'ljcofosioagvqgyjxyhwabkdk',
      'ecygwfqaaqqayzasmchpcciyg',
      'lwnzokqggkdeavfdelbmsmopa',
      'vzvzzohlabnugucaztiqpjnuz',
      'hmpsvjlqrpdoujykjpjaszbyg',
      'qecltqwdxhhtgwymcyzoegfjb',
      'kkzpnmdohmpfwcaidqvvidhil',
      'yorjkfvmajqogbazntfdcsxjw',
      'ozmjrlijrcavpdquxgxsspdck',
      'pbmnhemixfnnrxyehtvrgmcgj',
      'hmjnhmsbeyqrclsrqnkcgvnbb',
      'gnmjttbrssaqrxexvetvbbitl',
      'mjeeunmjsnervdsryyohbaqwj',
      'dbdqqvbuxumyyquawxqhtwmzw',
      'pqlvjmbsdtcnigpzxsukzwmko',
      'khfcvgkvzcacbvyjgxljcnsef',
      'gttinaushwdwqszgvgnmyrrna',
      'jawziwsmzxpemhvrehhmrpdrt',
      'jraqsdwrhbuwtencsbrrdaocd',
      'wcumhjpeoxtnyfmyjgidwdygz',
      'zsupwrrbmfqxhznqvgzwncnuc',
      'isxoessjaxelwczdrfgzvpzuf',
      'mkvcyneoihyivzdjjyarvpptt',
      'tblcltdkrtbnonydtvkwofhnz',
      'bvdiheadshixavlsgzhljyvrh',
      'wgyfxnvpdglythhclicnaspmk',
      'jczrsbedwzgcolugcgagmpliu',
      'hbtaozfiyuncpbxttubdjuawl',
      'ysesrelasduqdvmqlivkemjwv',
      'dvegpzylwacuitqstkwhexmfm',
      'qpohxkseifqgjvzhtpvcudgbs',
      'xnqfjgnptzygmrpkrtezkklwi',
      'loagputwqufsnuiliwzkkswbm',
      'qmaygqwpoluqgnluswyiqtkii',
      'kfkgujfjnceqgnrfrhruhjbyt',
      'hhuiezfqtimvwcuxzntfhlrne',
      'fppfynqctklvcjofupfpppbgf',
      'zhnjfvuqxiwlcgzdmvvvtgutp',
      'wfojhsgkxnucxqjhotzsluesd',
      'debcenekfzbmgwhhrapdtanmh',
      'yjyndatsvodjcqstzrpwtohot',
      'eahsjdyjpjmnkyjmrcarfpqfn',
      'neawoysnozwgnpfntrgescdna',
      'amyvbulegalkpvjwiwqiwupsr',
      'orniwvnuhieayasqajpythnst',
      'ckaaadehgciomnrgzwevjvncc',
      'syvymkadfzwiolfaoovcixofd',
      'dssksvddztfkrdasocdhthqic',
      'vcivwcpuxpghqjprhzgteihsd',
      'lcfuiasytbjayvaklpqmprckw',
      'ycjvozfarxyakorbrhvchhowt',
      'fpvstyicqmnyykqyqxrxhlxlj',
      'puofavimwtasugazodnbbblky',
      'nhqeihlxsygethktxbwlvnbja',
      'xbstdokilljvqkkrjauydntpw',
    ]
  );

  expect(result).toMatchObject([529]);
});
