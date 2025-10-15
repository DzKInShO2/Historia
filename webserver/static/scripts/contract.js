const contract = 
{
  "contractName": "Archive",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "times",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_url",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_time",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_kind",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_body",
          "type": "string"
        }
      ],
      "name": "pushArchive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_url",
          "type": "string"
        }
      ],
      "name": "getTimesOfArchive",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_url",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_time",
          "type": "uint256"
        }
      ],
      "name": "getArchive",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "kind",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "body",
              "type": "string"
            }
          ],
          "internalType": "struct Archive.Entry",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_url\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_time\",\"type\":\"uint256\"}],\"name\":\"getArchive\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"kind\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"body\",\"type\":\"string\"}],\"internalType\":\"struct Archive.Entry\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_url\",\"type\":\"string\"}],\"name\":\"getTimesOfArchive\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_url\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_time\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_kind\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_body\",\"type\":\"string\"}],\"name\":\"pushArchive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"times\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Archive.sol\":\"Archive\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Archive.sol\":{\"keccak256\":\"0x19e9084c6aab1d5402f88b8f0c07b3bf4bce3e7e49de53914800359c51f971ae\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4526350879df881e1611b9c854953d263d40f8b8bcab2bad8b4461b1e96a43cf\",\"dweb:/ipfs/QmbyRXD4udmWkwV2JcyHdfSqm8xsnTByeHsNzBDhzmHFjh\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5061095e806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630a6ba75a14610051578063627fd82a14610081578063952eeb62146100b1578063b4e2985e146100e1575b600080fd5b61006b600480360381019061006691906104e9565b6100fd565b604051610078919061077d565b60405180910390f35b61009b600480360381019061009691906104a8565b6101fe565b6040516100a8919061075b565b60405180910390f35b6100cb60048036038101906100c691906104e9565b610274565b6040516100d8919061079f565b60405180910390f35b6100fb60048036038101906100f6919061053d565b6102b8565b005b610105610388565b600080838560405160200161011b9291906107ba565b60405160208183030381529060405280519060200120815260200190815260200160002060405180604001604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101ed5780601f106101c2576101008083540402835291602001916101ed565b820191906000526020600020905b8154815290600101906020018083116101d057829003601f168201915b505050505081525050905092915050565b60606001826040516102109190610744565b908152602001604051809103902080548060200260200160405190810160405280929190818152602001828054801561026857602002820191906000526020600020905b815481526020019060010190808311610254575b50505050509050919050565b60018280516020810182018051848252602083016020850120818352809550505050505081815481106102a357fe5b90600052602060002001600091509150505481565b6102c0610388565b60405180604001604052808481526020018381525090508060008086886040516020016102ee9291906107ba565b6040516020818303038152906040528051906020012081526020019081526020016000206000820151816000015560208201518160010190805190602001906103389291906103a2565b5090505060018560405161034c9190610744565b90815260200160405180910390208490806001815401808255809150506001900390600052602060002001600090919091909150555050505050565b604051806040016040528060008152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103e357805160ff1916838001178555610411565b82800160010185558215610411579182015b828111156104105782518255916020019190600101906103f5565b5b50905061041e9190610422565b5090565b5b8082111561043b576000816000905550600101610423565b5090565b600082601f83011261045057600080fd5b813561046361045e82610817565b6107ea565b9150808252602083016020830185838301111561047f57600080fd5b61048a8382846108be565b50505092915050565b6000813590506104a281610911565b92915050565b6000602082840312156104ba57600080fd5b600082013567ffffffffffffffff8111156104d457600080fd5b6104e08482850161043f565b91505092915050565b600080604083850312156104fc57600080fd5b600083013567ffffffffffffffff81111561051657600080fd5b6105228582860161043f565b925050602061053385828601610493565b9150509250929050565b6000806000806080858703121561055357600080fd5b600085013567ffffffffffffffff81111561056d57600080fd5b6105798782880161043f565b945050602061058a87828801610493565b935050604061059b87828801610493565b925050606085013567ffffffffffffffff8111156105b857600080fd5b6105c48782880161043f565b91505092959194509250565b60006105dc8383610726565b60208301905092915050565b60006105f382610853565b6105fd8185610876565b935061060883610843565b8060005b8381101561063957815161062088826105d0565b975061062b83610869565b92505060018101905061060c565b5085935050505092915050565b60006106518261085e565b61065b8185610887565b935061066b8185602086016108cd565b61067481610900565b840191505092915050565b600061068a8261085e565b6106948185610898565b93506106a48185602086016108cd565b6106ad81610900565b840191505092915050565b60006106c38261085e565b6106cd81856108a9565b93506106dd8185602086016108cd565b80840191505092915050565b60006040830160008301516107016000860182610726565b50602083015184820360208601526107198282610646565b9150508091505092915050565b61072f816108b4565b82525050565b61073e816108b4565b82525050565b600061075082846106b8565b915081905092915050565b6000602082019050818103600083015261077581846105e8565b905092915050565b6000602082019050818103600083015261079781846106e9565b905092915050565b60006020820190506107b46000830184610735565b92915050565b60006040820190506107cf6000830185610735565b81810360208301526107e1818461067f565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561080d57600080fd5b8060405250919050565b600067ffffffffffffffff82111561082e57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156108eb5780820151818401526020810190506108d0565b838111156108fa576000848401525b50505050565b6000601f19601f8301169050919050565b61091a816108b4565b811461092557600080fd5b5056fea2646970667358221220d579ea92a36ccc21b2011ab101b48967ba0ddced2de62fbadc83a00cce19bb1c64736f6c634300060c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80630a6ba75a14610051578063627fd82a14610081578063952eeb62146100b1578063b4e2985e146100e1575b600080fd5b61006b600480360381019061006691906104e9565b6100fd565b604051610078919061077d565b60405180910390f35b61009b600480360381019061009691906104a8565b6101fe565b6040516100a8919061075b565b60405180910390f35b6100cb60048036038101906100c691906104e9565b610274565b6040516100d8919061079f565b60405180910390f35b6100fb60048036038101906100f6919061053d565b6102b8565b005b610105610388565b600080838560405160200161011b9291906107ba565b60405160208183030381529060405280519060200120815260200190815260200160002060405180604001604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101ed5780601f106101c2576101008083540402835291602001916101ed565b820191906000526020600020905b8154815290600101906020018083116101d057829003601f168201915b505050505081525050905092915050565b60606001826040516102109190610744565b908152602001604051809103902080548060200260200160405190810160405280929190818152602001828054801561026857602002820191906000526020600020905b815481526020019060010190808311610254575b50505050509050919050565b60018280516020810182018051848252602083016020850120818352809550505050505081815481106102a357fe5b90600052602060002001600091509150505481565b6102c0610388565b60405180604001604052808481526020018381525090508060008086886040516020016102ee9291906107ba565b6040516020818303038152906040528051906020012081526020019081526020016000206000820151816000015560208201518160010190805190602001906103389291906103a2565b5090505060018560405161034c9190610744565b90815260200160405180910390208490806001815401808255809150506001900390600052602060002001600090919091909150555050505050565b604051806040016040528060008152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103e357805160ff1916838001178555610411565b82800160010185558215610411579182015b828111156104105782518255916020019190600101906103f5565b5b50905061041e9190610422565b5090565b5b8082111561043b576000816000905550600101610423565b5090565b600082601f83011261045057600080fd5b813561046361045e82610817565b6107ea565b9150808252602083016020830185838301111561047f57600080fd5b61048a8382846108be565b50505092915050565b6000813590506104a281610911565b92915050565b6000602082840312156104ba57600080fd5b600082013567ffffffffffffffff8111156104d457600080fd5b6104e08482850161043f565b91505092915050565b600080604083850312156104fc57600080fd5b600083013567ffffffffffffffff81111561051657600080fd5b6105228582860161043f565b925050602061053385828601610493565b9150509250929050565b6000806000806080858703121561055357600080fd5b600085013567ffffffffffffffff81111561056d57600080fd5b6105798782880161043f565b945050602061058a87828801610493565b935050604061059b87828801610493565b925050606085013567ffffffffffffffff8111156105b857600080fd5b6105c48782880161043f565b91505092959194509250565b60006105dc8383610726565b60208301905092915050565b60006105f382610853565b6105fd8185610876565b935061060883610843565b8060005b8381101561063957815161062088826105d0565b975061062b83610869565b92505060018101905061060c565b5085935050505092915050565b60006106518261085e565b61065b8185610887565b935061066b8185602086016108cd565b61067481610900565b840191505092915050565b600061068a8261085e565b6106948185610898565b93506106a48185602086016108cd565b6106ad81610900565b840191505092915050565b60006106c38261085e565b6106cd81856108a9565b93506106dd8185602086016108cd565b80840191505092915050565b60006040830160008301516107016000860182610726565b50602083015184820360208601526107198282610646565b9150508091505092915050565b61072f816108b4565b82525050565b61073e816108b4565b82525050565b600061075082846106b8565b915081905092915050565b6000602082019050818103600083015261077581846105e8565b905092915050565b6000602082019050818103600083015261079781846106e9565b905092915050565b60006020820190506107b46000830184610735565b92915050565b60006040820190506107cf6000830185610735565b81810360208301526107e1818461067f565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561080d57600080fd5b8060405250919050565b600067ffffffffffffffff82111561082e57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156108eb5780820151818401526020810190506108d0565b838111156108fa576000848401525b50505050565b6000601f19601f8301169050919050565b61091a816108b4565b811461092557600080fd5b5056fea2646970667358221220d579ea92a36ccc21b2011ab101b48967ba0ddced2de62fbadc83a00cce19bb1c64736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "99:1009:0:-:0;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "99:1009:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;944:162;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;812:126;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;455:42;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;504:302;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;944:162;1024:12;;:::i;:::-;1055:8;:44;1085:5;1092:4;1074:23;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1064:34;;;;;;1055:44;;;;;;;;;;;1048:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;944:162;;;;:::o;812:126::-;885:16;920:5;926:4;920:11;;;;;;:::i;:::-;;;;;;;;;;;;;913:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;812:126;;;:::o;455:42::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;504:302::-;612:19;;:::i;:::-;634:67;;;;;;;;660:5;634:67;;;;685:5;634:67;;;612:89;;759:6;712:8;:44;742:5;749:4;731:23;;;;;;;;;:::i;:::-;;;;;;;;;;;;;721:34;;;;;;712:44;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;776:5;782:4;776:11;;;;;;:::i;:::-;;;;;;;;;;;;;793:5;776:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;504:302;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;6:442::-;;108:3;101:4;93:6;89:17;85:27;75:2;;126:1;123;116:12;75:2;163:6;150:20;185:65;200:49;242:6;200:49;:::i;:::-;185:65;:::i;:::-;176:74;;270:6;263:5;256:21;306:4;298:6;294:17;339:4;332:5;328:16;374:3;365:6;360:3;356:16;353:25;350:2;;;391:1;388;381:12;350:2;401:41;435:6;430:3;425;401:41;:::i;:::-;68:380;;;;;;;:::o;456:130::-;;536:6;523:20;514:29;;548:33;575:5;548:33;:::i;:::-;508:78;;;;:::o;593:347::-;;707:2;695:9;686:7;682:23;678:32;675:2;;;723:1;720;713:12;675:2;786:1;775:9;771:17;758:31;809:18;801:6;798:30;795:2;;;841:1;838;831:12;795:2;861:63;916:7;907:6;896:9;892:22;861:63;:::i;:::-;851:73;;737:193;669:271;;;;:::o;947:472::-;;;1078:2;1066:9;1057:7;1053:23;1049:32;1046:2;;;1094:1;1091;1084:12;1046:2;1157:1;1146:9;1142:17;1129:31;1180:18;1172:6;1169:30;1166:2;;;1212:1;1209;1202:12;1166:2;1232:63;1287:7;1278:6;1267:9;1263:22;1232:63;:::i;:::-;1222:73;;1108:193;1332:2;1350:53;1395:7;1386:6;1375:9;1371:22;1350:53;:::i;:::-;1340:63;;1311:98;1040:379;;;;;:::o;1426:829::-;;;;;1601:3;1589:9;1580:7;1576:23;1572:33;1569:2;;;1618:1;1615;1608:12;1569:2;1681:1;1670:9;1666:17;1653:31;1704:18;1696:6;1693:30;1690:2;;;1736:1;1733;1726:12;1690:2;1756:63;1811:7;1802:6;1791:9;1787:22;1756:63;:::i;:::-;1746:73;;1632:193;1856:2;1874:53;1919:7;1910:6;1899:9;1895:22;1874:53;:::i;:::-;1864:63;;1835:98;1964:2;1982:53;2027:7;2018:6;2007:9;2003:22;1982:53;:::i;:::-;1972:63;;1943:98;2100:2;2089:9;2085:18;2072:32;2124:18;2116:6;2113:30;2110:2;;;2156:1;2153;2146:12;2110:2;2176:63;2231:7;2222:6;2211:9;2207:22;2176:63;:::i;:::-;2166:73;;2051:194;1563:692;;;;;;;:::o;2263:173::-;;2350:46;2392:3;2384:6;2350:46;:::i;:::-;2425:4;2420:3;2416:14;2402:28;;2343:93;;;;:::o;2475:690::-;;2620:54;2668:5;2620:54;:::i;:::-;2687:86;2766:6;2761:3;2687:86;:::i;:::-;2680:93;;2794:56;2844:5;2794:56;:::i;:::-;2870:7;2898:1;2883:260;2908:6;2905:1;2902:13;2883:260;;;2975:6;2969:13;2996:63;3055:3;3040:13;2996:63;:::i;:::-;2989:70;;3076:60;3129:6;3076:60;:::i;:::-;3066:70;;2940:203;2930:1;2927;2923:9;2918:14;;2883:260;;;2887:14;3156:3;3149:10;;2599:566;;;;;;;:::o;3173:327::-;;3275:39;3308:5;3275:39;:::i;:::-;3326:61;3380:6;3375:3;3326:61;:::i;:::-;3319:68;;3392:52;3437:6;3432:3;3425:4;3418:5;3414:16;3392:52;:::i;:::-;3465:29;3487:6;3465:29;:::i;:::-;3460:3;3456:39;3449:46;;3255:245;;;;;:::o;3507:347::-;;3619:39;3652:5;3619:39;:::i;:::-;3670:71;3734:6;3729:3;3670:71;:::i;:::-;3663:78;;3746:52;3791:6;3786:3;3779:4;3772:5;3768:16;3746:52;:::i;:::-;3819:29;3841:6;3819:29;:::i;:::-;3814:3;3810:39;3803:46;;3599:255;;;;;:::o;3861:360::-;;3991:39;4024:5;3991:39;:::i;:::-;4042:89;4124:6;4119:3;4042:89;:::i;:::-;4035:96;;4136:52;4181:6;4176:3;4169:4;4162:5;4158:16;4136:52;:::i;:::-;4209:6;4204:3;4200:16;4193:23;;3971:250;;;;;:::o;4279:561::-;;4420:4;4415:3;4411:14;4503:4;4496:5;4492:16;4486:23;4515:63;4572:4;4567:3;4563:14;4549:12;4515:63;:::i;:::-;4440:144;4657:4;4650:5;4646:16;4640:23;4709:3;4703:4;4699:14;4692:4;4687:3;4683:14;4676:38;4729:73;4797:4;4783:12;4729:73;:::i;:::-;4721:81;;4594:220;4831:4;4824:11;;4393:447;;;;;:::o;4847:103::-;4920:24;4938:5;4920:24;:::i;:::-;4915:3;4908:37;4902:48;;:::o;4957:113::-;5040:24;5058:5;5040:24;:::i;:::-;5035:3;5028:37;5022:48;;:::o;5077:275::-;;5232:95;5323:3;5314:6;5232:95;:::i;:::-;5225:102;;5344:3;5337:10;;5213:139;;;;:::o;5359:370::-;;5536:2;5525:9;5521:18;5513:26;;5586:9;5580:4;5576:20;5572:1;5561:9;5557:17;5550:47;5611:108;5714:4;5705:6;5611:108;:::i;:::-;5603:116;;5507:222;;;;:::o;5736:350::-;;5903:2;5892:9;5888:18;5880:26;;5953:9;5947:4;5943:20;5939:1;5928:9;5924:17;5917:47;5978:98;6071:4;6062:6;5978:98;:::i;:::-;5970:106;;5874:212;;;;:::o;6093:222::-;;6220:2;6209:9;6205:18;6197:26;;6234:71;6302:1;6291:9;6287:17;6278:6;6234:71;:::i;:::-;6191:124;;;;:::o;6322:421::-;;6497:2;6486:9;6482:18;6474:26;;6511:71;6579:1;6568:9;6564:17;6555:6;6511:71;:::i;:::-;6630:9;6624:4;6620:20;6615:2;6604:9;6600:18;6593:48;6655:78;6728:4;6719:6;6655:78;:::i;:::-;6647:86;;6468:275;;;;;:::o;6750:256::-;;6812:2;6806:9;6796:19;;6850:4;6842:6;6838:17;6949:6;6937:10;6934:22;6913:18;6901:10;6898:34;6895:62;6892:2;;;6970:1;6967;6960:12;6892:2;6990:10;6986:2;6979:22;6790:216;;;;:::o;7013:322::-;;7157:18;7149:6;7146:30;7143:2;;;7189:1;7186;7179:12;7143:2;7256:4;7252:9;7245:4;7237:6;7233:17;7229:33;7221:41;;7320:4;7314;7310:15;7302:23;;7080:255;;;:::o;7342:151::-;;7428:3;7420:11;;7466:4;7461:3;7457:14;7449:22;;7414:79;;;:::o;7500:137::-;;7609:5;7603:12;7593:22;;7574:63;;;:::o;7644:122::-;;7738:5;7732:12;7722:22;;7703:63;;;:::o;7773:108::-;;7871:4;7866:3;7862:14;7854:22;;7848:33;;;:::o;7889:178::-;;8019:6;8014:3;8007:19;8056:4;8051:3;8047:14;8032:29;;8000:67;;;;:::o;8076:153::-;;8181:6;8176:3;8169:19;8218:4;8213:3;8209:14;8194:29;;8162:67;;;;:::o;8238:163::-;;8353:6;8348:3;8341:19;8390:4;8385:3;8381:14;8366:29;;8334:67;;;;:::o;8410:145::-;;8546:3;8531:18;;8524:31;;;;:::o;8563:72::-;;8625:5;8614:16;;8608:27;;;:::o;8643:145::-;8724:6;8719:3;8714;8701:30;8780:1;8771:6;8766:3;8762:16;8755:27;8694:94;;;:::o;8797:268::-;8862:1;8869:101;8883:6;8880:1;8877:13;8869:101;;;8959:1;8954:3;8950:11;8944:18;8940:1;8935:3;8931:11;8924:39;8905:2;8902:1;8898:10;8893:15;;8869:101;;;8985:6;8982:1;8979:13;8976:2;;;9050:1;9041:6;9036:3;9032:16;9025:27;8976:2;8846:219;;;;:::o;9073:97::-;;9161:2;9157:7;9152:2;9145:5;9141:14;9137:28;9127:38;;9121:49;;;:::o;9178:117::-;9247:24;9265:5;9247:24;:::i;:::-;9240:5;9237:35;9227:2;;9286:1;9283;9276:12;9227:2;9221:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0 <0.7.0;\npragma experimental ABIEncoderV2;\n\ncontract Archive {\n    struct Entry {\n        // Kind:\n        // 00 = Head and Body\n        // 10 = External Style\n        // 20 = External Script\n        // 30 = PNG Image\n        // 31 = JPEG Image\n        uint kind;\n        string body;\n    }\n\n    // TimedURL => Content\n    mapping (bytes32 => Entry) private archives;\n\n    // URL => List of TIME\n    mapping (string => uint256[]) public times;\n\n    function pushArchive(string memory _url, uint _time, uint _kind, string memory _body) \n    public {\n        Entry memory _entry = Entry({\n            kind: _kind,\n            body: _body\n        });\n\n        archives[keccak256(abi.encode(_time, _url))] = _entry;\n\n        times[_url].push(_time);\n    }\n\n    function getTimesOfArchive(string memory _url) \n    public view returns (uint256[] memory) {\n        return times[_url];\n    }\n\n    function getArchive(string memory _url, uint256 _time)\n    public view returns (Entry memory) {\n        return archives[keccak256(abi.encode(_time, _url))];\n    }\n}\n",
  "sourcePath": "/home/zacknuv/projects/assignments/2025_2/BLK0/blockchain/contracts/Archive.sol",
  "ast": {
    "absolutePath": "project:/contracts/Archive.sol",
    "exportedSymbols": {
      "Archive": [
        88
      ]
    },
    "id": 89,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".0",
          "<",
          "0.7",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:31:0"
      },
      {
        "id": 2,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "64:33:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 88,
        "linearizedBaseContracts": [
          88
        ],
        "name": "Archive",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Archive.Entry",
            "id": 7,
            "members": [
              {
                "constant": false,
                "id": 4,
                "mutability": "mutable",
                "name": "kind",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 7,
                "src": "308:9:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "308:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6,
                "mutability": "mutable",
                "name": "body",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 7,
                "src": "327:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 5,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "327:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Entry",
            "nodeType": "StructDefinition",
            "scope": 88,
            "src": "122:223:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 11,
            "mutability": "mutable",
            "name": "archives",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 88,
            "src": "378:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$7_storage_$",
              "typeString": "mapping(bytes32 => struct Archive.Entry)"
            },
            "typeName": {
              "id": 10,
              "keyType": {
                "id": 8,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "387:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "378:26:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$7_storage_$",
                "typeString": "mapping(bytes32 => struct Archive.Entry)"
              },
              "valueType": {
                "contractScope": null,
                "id": 9,
                "name": "Entry",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7,
                "src": "398:5:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Entry_$7_storage_ptr",
                  "typeString": "struct Archive.Entry"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "functionSelector": "952eeb62",
            "id": 16,
            "mutability": "mutable",
            "name": "times",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 88,
            "src": "455:42:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(string => uint256[])"
            },
            "typeName": {
              "id": 15,
              "keyType": {
                "id": 12,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "464:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "455:29:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(string => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 13,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "474:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 14,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "474:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 53,
              "nodeType": "Block",
              "src": "602:204:0",
              "statements": [
                {
                  "assignments": [
                    28
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 28,
                      "mutability": "mutable",
                      "name": "_entry",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 53,
                      "src": "612:19:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$7_memory_ptr",
                        "typeString": "struct Archive.Entry"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 27,
                        "name": "Entry",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 7,
                        "src": "612:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$7_storage_ptr",
                          "typeString": "struct Archive.Entry"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 33,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30,
                        "name": "_kind",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "660:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 31,
                        "name": "_body",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24,
                        "src": "685:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 29,
                      "name": "Entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "634:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Entry_$7_storage_ptr_$",
                        "typeString": "type(struct Archive.Entry storage pointer)"
                      }
                    },
                    "id": 32,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "kind",
                      "body"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "634:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$7_memory_ptr",
                      "typeString": "struct Archive.Entry memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "612:89:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 44,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34,
                        "name": "archives",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "712:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$7_storage_$",
                          "typeString": "mapping(bytes32 => struct Archive.Entry storage ref)"
                        }
                      },
                      "id": 42,
                      "indexExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 38,
                                "name": "_time",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20,
                                "src": "742:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 39,
                                "name": "_url",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "749:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 36,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "731:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 37,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encode",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "731:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 40,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "731:23:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 35,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "721:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 41,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "721:34:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "712:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$7_storage",
                        "typeString": "struct Archive.Entry storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 43,
                      "name": "_entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "759:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$7_memory_ptr",
                        "typeString": "struct Archive.Entry memory"
                      }
                    },
                    "src": "712:53:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$7_storage",
                      "typeString": "struct Archive.Entry storage ref"
                    }
                  },
                  "id": 45,
                  "nodeType": "ExpressionStatement",
                  "src": "712:53:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "_time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20,
                        "src": "793:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 46,
                          "name": "times",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16,
                          "src": "776:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(string memory => uint256[] storage ref)"
                          }
                        },
                        "id": 48,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 47,
                          "name": "_url",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "782:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "776:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 49,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "776:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 51,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "776:23:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 52,
                  "nodeType": "ExpressionStatement",
                  "src": "776:23:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b4e2985e",
            "id": 54,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pushArchive",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "mutability": "mutable",
                  "name": "_url",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 54,
                  "src": "525:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20,
                  "mutability": "mutable",
                  "name": "_time",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 54,
                  "src": "545:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 19,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "545:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22,
                  "mutability": "mutable",
                  "name": "_kind",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 54,
                  "src": "557:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "_body",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 54,
                  "src": "569:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "569:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "524:65:0"
            },
            "returnParameters": {
              "id": 26,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "602:0:0"
            },
            "scope": 88,
            "src": "504:302:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "903:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 62,
                      "name": "times",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "920:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(string memory => uint256[] storage ref)"
                      }
                    },
                    "id": 64,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 63,
                      "name": "_url",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "926:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "920:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 61,
                  "id": 65,
                  "nodeType": "Return",
                  "src": "913:18:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "627fd82a",
            "id": 67,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTimesOfArchive",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "mutability": "mutable",
                  "name": "_url",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 67,
                  "src": "839:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "839:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "838:20:0"
            },
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 67,
                  "src": "885:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 58,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "885:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 59,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "885:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "884:18:0"
            },
            "scope": 88,
            "src": "812:126:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "1038:68:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 76,
                      "name": "archives",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "1055:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$7_storage_$",
                        "typeString": "mapping(bytes32 => struct Archive.Entry storage ref)"
                      }
                    },
                    "id": 84,
                    "indexExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 80,
                              "name": "_time",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 71,
                              "src": "1085:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 81,
                              "name": "_url",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 69,
                              "src": "1092:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 78,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "1074:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 79,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1074:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1074:23:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 77,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "1064:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 83,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1064:34:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1055:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$7_storage",
                      "typeString": "struct Archive.Entry storage ref"
                    }
                  },
                  "functionReturnParameters": 75,
                  "id": 85,
                  "nodeType": "Return",
                  "src": "1048:51:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0a6ba75a",
            "id": 87,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getArchive",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 72,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "mutability": "mutable",
                  "name": "_url",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 87,
                  "src": "964:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "964:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71,
                  "mutability": "mutable",
                  "name": "_time",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 87,
                  "src": "984:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "984:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "963:35:0"
            },
            "returnParameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 74,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 87,
                  "src": "1024:12:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Entry_$7_memory_ptr",
                    "typeString": "struct Archive.Entry"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 73,
                    "name": "Entry",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 7,
                    "src": "1024:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$7_storage_ptr",
                      "typeString": "struct Archive.Entry"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1023:14:0"
            },
            "scope": 88,
            "src": "944:162:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 89,
        "src": "99:1009:0"
      }
    ],
    "src": "32:1077:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/Archive.sol",
      "exportedSymbols": {
        "Archive": [
          88
        ]
      },
      "license": "MIT"
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">=",
            "0.5",
            ".0",
            "<",
            "0.7",
            ".0"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "32:31:0"
      },
      {
        "attributes": {
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ]
        },
        "id": 2,
        "name": "PragmaDirective",
        "src": "64:33:0"
      },
      {
        "attributes": {
          "abstract": false,
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            88
          ],
          "name": "Archive",
          "scope": 89
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "Archive.Entry",
              "name": "Entry",
              "scope": 88,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "kind",
                  "overrides": null,
                  "scope": 7,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 3,
                    "name": "ElementaryTypeName",
                    "src": "308:4:0"
                  }
                ],
                "id": 4,
                "name": "VariableDeclaration",
                "src": "308:9:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "mutability": "mutable",
                  "name": "body",
                  "overrides": null,
                  "scope": 7,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 5,
                    "name": "ElementaryTypeName",
                    "src": "327:6:0"
                  }
                ],
                "id": 6,
                "name": "VariableDeclaration",
                "src": "327:11:0"
              }
            ],
            "id": 7,
            "name": "StructDefinition",
            "src": "122:223:0"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "archives",
              "overrides": null,
              "scope": 88,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct Archive.Entry)",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct Archive.Entry)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 8,
                    "name": "ElementaryTypeName",
                    "src": "387:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Entry",
                      "referencedDeclaration": 7,
                      "type": "struct Archive.Entry"
                    },
                    "id": 9,
                    "name": "UserDefinedTypeName",
                    "src": "398:5:0"
                  }
                ],
                "id": 10,
                "name": "Mapping",
                "src": "378:26:0"
              }
            ],
            "id": 11,
            "name": "VariableDeclaration",
            "src": "378:43:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "952eeb62",
              "mutability": "mutable",
              "name": "times",
              "overrides": null,
              "scope": 88,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string => uint256[])",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string => uint256[])"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 12,
                    "name": "ElementaryTypeName",
                    "src": "464:6:0"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "uint256[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 13,
                        "name": "ElementaryTypeName",
                        "src": "474:7:0"
                      }
                    ],
                    "id": 14,
                    "name": "ArrayTypeName",
                    "src": "474:9:0"
                  }
                ],
                "id": 15,
                "name": "Mapping",
                "src": "455:29:0"
              }
            ],
            "id": 16,
            "name": "VariableDeclaration",
            "src": "455:42:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "b4e2985e",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "pushArchive",
              "overrides": null,
              "scope": 88,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_url",
                      "overrides": null,
                      "scope": 54,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 17,
                        "name": "ElementaryTypeName",
                        "src": "525:6:0"
                      }
                    ],
                    "id": 18,
                    "name": "VariableDeclaration",
                    "src": "525:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_time",
                      "overrides": null,
                      "scope": 54,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 19,
                        "name": "ElementaryTypeName",
                        "src": "545:4:0"
                      }
                    ],
                    "id": 20,
                    "name": "VariableDeclaration",
                    "src": "545:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_kind",
                      "overrides": null,
                      "scope": 54,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 21,
                        "name": "ElementaryTypeName",
                        "src": "557:4:0"
                      }
                    ],
                    "id": 22,
                    "name": "VariableDeclaration",
                    "src": "557:10:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_body",
                      "overrides": null,
                      "scope": 54,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 23,
                        "name": "ElementaryTypeName",
                        "src": "569:6:0"
                      }
                    ],
                    "id": 24,
                    "name": "VariableDeclaration",
                    "src": "569:19:0"
                  }
                ],
                "id": 25,
                "name": "ParameterList",
                "src": "524:65:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 26,
                "name": "ParameterList",
                "src": "602:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        28
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "_entry",
                          "overrides": null,
                          "scope": 53,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Archive.Entry",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Entry",
                              "referencedDeclaration": 7,
                              "type": "struct Archive.Entry"
                            },
                            "id": 27,
                            "name": "UserDefinedTypeName",
                            "src": "612:5:0"
                          }
                        ],
                        "id": 28,
                        "name": "VariableDeclaration",
                        "src": "612:19:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            "kind",
                            "body"
                          ],
                          "tryCall": false,
                          "type": "struct Archive.Entry memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7,
                              "type": "type(struct Archive.Entry storage pointer)",
                              "value": "Entry"
                            },
                            "id": 29,
                            "name": "Identifier",
                            "src": "634:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 22,
                              "type": "uint256",
                              "value": "_kind"
                            },
                            "id": 30,
                            "name": "Identifier",
                            "src": "660:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 24,
                              "type": "string memory",
                              "value": "_body"
                            },
                            "id": 31,
                            "name": "Identifier",
                            "src": "685:5:0"
                          }
                        ],
                        "id": 32,
                        "name": "FunctionCall",
                        "src": "634:67:0"
                      }
                    ],
                    "id": 33,
                    "name": "VariableDeclarationStatement",
                    "src": "612:89:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct Archive.Entry storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct Archive.Entry storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11,
                                  "type": "mapping(bytes32 => struct Archive.Entry storage ref)",
                                  "value": "archives"
                                },
                                "id": 34,
                                "name": "Identifier",
                                "src": "712:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "bytes32",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes_memory_ptr",
                                          "typeString": "bytes memory"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": -8,
                                      "type": "function (bytes memory) pure returns (bytes32)",
                                      "value": "keccak256"
                                    },
                                    "id": 35,
                                    "name": "Identifier",
                                    "src": "721:9:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "tryCall": false,
                                      "type": "bytes memory",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "encode",
                                          "referencedDeclaration": null,
                                          "type": "function () pure returns (bytes memory)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": -1,
                                              "type": "abi",
                                              "value": "abi"
                                            },
                                            "id": 36,
                                            "name": "Identifier",
                                            "src": "731:3:0"
                                          }
                                        ],
                                        "id": 37,
                                        "name": "MemberAccess",
                                        "src": "731:10:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 20,
                                          "type": "uint256",
                                          "value": "_time"
                                        },
                                        "id": 38,
                                        "name": "Identifier",
                                        "src": "742:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 18,
                                          "type": "string memory",
                                          "value": "_url"
                                        },
                                        "id": 39,
                                        "name": "Identifier",
                                        "src": "749:4:0"
                                      }
                                    ],
                                    "id": 40,
                                    "name": "FunctionCall",
                                    "src": "731:23:0"
                                  }
                                ],
                                "id": 41,
                                "name": "FunctionCall",
                                "src": "721:34:0"
                              }
                            ],
                            "id": 42,
                            "name": "IndexAccess",
                            "src": "712:44:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 28,
                              "type": "struct Archive.Entry memory",
                              "value": "_entry"
                            },
                            "id": 43,
                            "name": "Identifier",
                            "src": "759:6:0"
                          }
                        ],
                        "id": 44,
                        "name": "Assignment",
                        "src": "712:53:0"
                      }
                    ],
                    "id": 45,
                    "name": "ExpressionStatement",
                    "src": "712:53:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 16,
                                      "type": "mapping(string memory => uint256[] storage ref)",
                                      "value": "times"
                                    },
                                    "id": 46,
                                    "name": "Identifier",
                                    "src": "776:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 18,
                                      "type": "string memory",
                                      "value": "_url"
                                    },
                                    "id": 47,
                                    "name": "Identifier",
                                    "src": "782:4:0"
                                  }
                                ],
                                "id": 48,
                                "name": "IndexAccess",
                                "src": "776:11:0"
                              }
                            ],
                            "id": 49,
                            "name": "MemberAccess",
                            "src": "776:16:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 20,
                              "type": "uint256",
                              "value": "_time"
                            },
                            "id": 50,
                            "name": "Identifier",
                            "src": "793:5:0"
                          }
                        ],
                        "id": 51,
                        "name": "FunctionCall",
                        "src": "776:23:0"
                      }
                    ],
                    "id": 52,
                    "name": "ExpressionStatement",
                    "src": "776:23:0"
                  }
                ],
                "id": 53,
                "name": "Block",
                "src": "602:204:0"
              }
            ],
            "id": 54,
            "name": "FunctionDefinition",
            "src": "504:302:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "627fd82a",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getTimesOfArchive",
              "overrides": null,
              "scope": 88,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_url",
                      "overrides": null,
                      "scope": 67,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 55,
                        "name": "ElementaryTypeName",
                        "src": "839:6:0"
                      }
                    ],
                    "id": 56,
                    "name": "VariableDeclaration",
                    "src": "839:18:0"
                  }
                ],
                "id": 57,
                "name": "ParameterList",
                "src": "838:20:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 67,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "uint256[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 58,
                            "name": "ElementaryTypeName",
                            "src": "885:7:0"
                          }
                        ],
                        "id": 59,
                        "name": "ArrayTypeName",
                        "src": "885:9:0"
                      }
                    ],
                    "id": 60,
                    "name": "VariableDeclaration",
                    "src": "885:16:0"
                  }
                ],
                "id": 61,
                "name": "ParameterList",
                "src": "884:18:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 61
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 16,
                              "type": "mapping(string memory => uint256[] storage ref)",
                              "value": "times"
                            },
                            "id": 62,
                            "name": "Identifier",
                            "src": "920:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 56,
                              "type": "string memory",
                              "value": "_url"
                            },
                            "id": 63,
                            "name": "Identifier",
                            "src": "926:4:0"
                          }
                        ],
                        "id": 64,
                        "name": "IndexAccess",
                        "src": "920:11:0"
                      }
                    ],
                    "id": 65,
                    "name": "Return",
                    "src": "913:18:0"
                  }
                ],
                "id": 66,
                "name": "Block",
                "src": "903:35:0"
              }
            ],
            "id": 67,
            "name": "FunctionDefinition",
            "src": "812:126:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "0a6ba75a",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getArchive",
              "overrides": null,
              "scope": 88,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_url",
                      "overrides": null,
                      "scope": 87,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 68,
                        "name": "ElementaryTypeName",
                        "src": "964:6:0"
                      }
                    ],
                    "id": 69,
                    "name": "VariableDeclaration",
                    "src": "964:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_time",
                      "overrides": null,
                      "scope": 87,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 70,
                        "name": "ElementaryTypeName",
                        "src": "984:7:0"
                      }
                    ],
                    "id": 71,
                    "name": "VariableDeclaration",
                    "src": "984:13:0"
                  }
                ],
                "id": 72,
                "name": "ParameterList",
                "src": "963:35:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 87,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct Archive.Entry",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Entry",
                          "referencedDeclaration": 7,
                          "type": "struct Archive.Entry"
                        },
                        "id": 73,
                        "name": "UserDefinedTypeName",
                        "src": "1024:5:0"
                      }
                    ],
                    "id": 74,
                    "name": "VariableDeclaration",
                    "src": "1024:12:0"
                  }
                ],
                "id": 75,
                "name": "ParameterList",
                "src": "1023:14:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 75
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct Archive.Entry storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11,
                              "type": "mapping(bytes32 => struct Archive.Entry storage ref)",
                              "value": "archives"
                            },
                            "id": 76,
                            "name": "Identifier",
                            "src": "1055:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -8,
                                  "type": "function (bytes memory) pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 77,
                                "name": "Identifier",
                                "src": "1064:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "bytes memory",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "encode",
                                      "referencedDeclaration": null,
                                      "type": "function () pure returns (bytes memory)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": -1,
                                          "type": "abi",
                                          "value": "abi"
                                        },
                                        "id": 78,
                                        "name": "Identifier",
                                        "src": "1074:3:0"
                                      }
                                    ],
                                    "id": 79,
                                    "name": "MemberAccess",
                                    "src": "1074:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 71,
                                      "type": "uint256",
                                      "value": "_time"
                                    },
                                    "id": 80,
                                    "name": "Identifier",
                                    "src": "1085:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 69,
                                      "type": "string memory",
                                      "value": "_url"
                                    },
                                    "id": 81,
                                    "name": "Identifier",
                                    "src": "1092:4:0"
                                  }
                                ],
                                "id": 82,
                                "name": "FunctionCall",
                                "src": "1074:23:0"
                              }
                            ],
                            "id": 83,
                            "name": "FunctionCall",
                            "src": "1064:34:0"
                          }
                        ],
                        "id": 84,
                        "name": "IndexAccess",
                        "src": "1055:44:0"
                      }
                    ],
                    "id": 85,
                    "name": "Return",
                    "src": "1048:51:0"
                  }
                ],
                "id": 86,
                "name": "Block",
                "src": "1038:68:0"
              }
            ],
            "id": 87,
            "name": "FunctionDefinition",
            "src": "944:162:0"
          }
        ],
        "id": 88,
        "name": "ContractDefinition",
        "src": "99:1009:0"
      }
    ],
    "id": 89,
    "name": "SourceUnit",
    "src": "32:1077:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.12+commit.27d51765.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xA337059a0A45DeBee675dceA18779e48EEd0325F",
      "transactionHash": "0x926327c0810b89211a4bbe376689ffbf598d2c50cfbc7ce81ff24c9c53968a15"
    }
  },
  "schemaVersion": "3.4.16",
  "updatedAt": "2025-10-14T21:57:57.884Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
