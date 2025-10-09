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
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
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
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_url\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getArchive\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"kind\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"body\",\"type\":\"string\"}],\"internalType\":\"struct Archive.Entry\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_url\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_kind\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_body\",\"type\":\"string\"}],\"name\":\"pushArchive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"times\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Archive.sol\":\"Archive\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Archive.sol\":{\"keccak256\":\"0x974114b653ea0ad36de1a9ffbc9acf48cee88f02bcaf79b06a68d6f1dbdf1fc2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0262134ef952b0cb37da8b24a84b154fb876ba5056904c89fd1e21eb45a41734\",\"dweb:/ipfs/QmXuVNDM388hUo1jWBs9NfuYJUBSC6h5US83x1aDY82uPM\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50610786806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630a6ba75a14610046578063952eeb6214610076578063c1580dc3146100a6575b600080fd5b610060600480360381019061005b91906103f6565b6100c2565b60405161006d91906105de565b60405180910390f35b610090600480360381019061008b91906103f6565b6101c3565b60405161009d9190610600565b60405180910390f35b6100c060048036038101906100bb919061044a565b610207565b005b6100ca6102d6565b60008083856040516020016100e092919061061b565b60405160208183030381529060405280519060200120815260200190815260200160002060405180604001604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101b25780601f10610187576101008083540402835291602001916101b2565b820191906000526020600020905b81548152906001019060200180831161019557829003601f168201915b505050505081525050905092915050565b60018280516020810182018051848252602083016020850120818352809550505050505081815481106101f257fe5b90600052602060002001600091509150505481565b61020f6102d6565b604051806040016040528084815260200183815250905080600080428760405160200161023d92919061061b565b6040516020818303038152906040528051906020012081526020019081526020016000206000820151816000015560208201518160010190805190602001906102879291906102f0565b5090505060018460405161029b91906105c7565b908152602001604051809103902042908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b604051806040016040528060008152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061033157805160ff191683800117855561035f565b8280016001018555821561035f579182015b8281111561035e578251825591602001919060010190610343565b5b50905061036c9190610370565b5090565b5b80821115610389576000816000905550600101610371565b5090565b600082601f83011261039e57600080fd5b81356103b16103ac82610678565b61064b565b915080825260208301602083018583830111156103cd57600080fd5b6103d88382846106e6565b50505092915050565b6000813590506103f081610739565b92915050565b6000806040838503121561040957600080fd5b600083013567ffffffffffffffff81111561042357600080fd5b61042f8582860161038d565b9250506020610440858286016103e1565b9150509250929050565b60008060006060848603121561045f57600080fd5b600084013567ffffffffffffffff81111561047957600080fd5b6104858682870161038d565b9350506020610496868287016103e1565b925050604084013567ffffffffffffffff8111156104b357600080fd5b6104bf8682870161038d565b9150509250925092565b60006104d4826106a4565b6104de81856106af565b93506104ee8185602086016106f5565b6104f781610728565b840191505092915050565b600061050d826106a4565b61051781856106c0565b93506105278185602086016106f5565b61053081610728565b840191505092915050565b6000610546826106a4565b61055081856106d1565b93506105608185602086016106f5565b80840191505092915050565b600060408301600083015161058460008601826105a9565b506020830151848203602086015261059c82826104c9565b9150508091505092915050565b6105b2816106dc565b82525050565b6105c1816106dc565b82525050565b60006105d3828461053b565b915081905092915050565b600060208201905081810360008301526105f8818461056c565b905092915050565b600060208201905061061560008301846105b8565b92915050565b600060408201905061063060008301856105b8565b81810360208301526106428184610502565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561066e57600080fd5b8060405250919050565b600067ffffffffffffffff82111561068f57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156107135780820151818401526020810190506106f8565b83811115610722576000848401525b50505050565b6000601f19601f8301169050919050565b610742816106dc565b811461074d57600080fd5b5056fea2646970667358221220a0e0e276a6e75818a80bf609dd45c7542fa5b26e6f908d6eed06b72f336fd0ff64736f6c634300060c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80630a6ba75a14610046578063952eeb6214610076578063c1580dc3146100a6575b600080fd5b610060600480360381019061005b91906103f6565b6100c2565b60405161006d91906105de565b60405180910390f35b610090600480360381019061008b91906103f6565b6101c3565b60405161009d9190610600565b60405180910390f35b6100c060048036038101906100bb919061044a565b610207565b005b6100ca6102d6565b60008083856040516020016100e092919061061b565b60405160208183030381529060405280519060200120815260200190815260200160002060405180604001604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101b25780601f10610187576101008083540402835291602001916101b2565b820191906000526020600020905b81548152906001019060200180831161019557829003601f168201915b505050505081525050905092915050565b60018280516020810182018051848252602083016020850120818352809550505050505081815481106101f257fe5b90600052602060002001600091509150505481565b61020f6102d6565b604051806040016040528084815260200183815250905080600080428760405160200161023d92919061061b565b6040516020818303038152906040528051906020012081526020019081526020016000206000820151816000015560208201518160010190805190602001906102879291906102f0565b5090505060018460405161029b91906105c7565b908152602001604051809103902042908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b604051806040016040528060008152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061033157805160ff191683800117855561035f565b8280016001018555821561035f579182015b8281111561035e578251825591602001919060010190610343565b5b50905061036c9190610370565b5090565b5b80821115610389576000816000905550600101610371565b5090565b600082601f83011261039e57600080fd5b81356103b16103ac82610678565b61064b565b915080825260208301602083018583830111156103cd57600080fd5b6103d88382846106e6565b50505092915050565b6000813590506103f081610739565b92915050565b6000806040838503121561040957600080fd5b600083013567ffffffffffffffff81111561042357600080fd5b61042f8582860161038d565b9250506020610440858286016103e1565b9150509250929050565b60008060006060848603121561045f57600080fd5b600084013567ffffffffffffffff81111561047957600080fd5b6104858682870161038d565b9350506020610496868287016103e1565b925050604084013567ffffffffffffffff8111156104b357600080fd5b6104bf8682870161038d565b9150509250925092565b60006104d4826106a4565b6104de81856106af565b93506104ee8185602086016106f5565b6104f781610728565b840191505092915050565b600061050d826106a4565b61051781856106c0565b93506105278185602086016106f5565b61053081610728565b840191505092915050565b6000610546826106a4565b61055081856106d1565b93506105608185602086016106f5565b80840191505092915050565b600060408301600083015161058460008601826105a9565b506020830151848203602086015261059c82826104c9565b9150508091505092915050565b6105b2816106dc565b82525050565b6105c1816106dc565b82525050565b60006105d3828461053b565b915081905092915050565b600060208201905081810360008301526105f8818461056c565b905092915050565b600060208201905061061560008301846105b8565b92915050565b600060408201905061063060008301856105b8565b81810360208301526106428184610502565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561066e57600080fd5b8060405250919050565b600067ffffffffffffffff82111561068f57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156107135780820151818401526020810190506106f8565b83811115610722576000848401525b50505050565b6000601f19601f8301169050919050565b610742816106dc565b811461074d57600080fd5b5056fea2646970667358221220a0e0e276a6e75818a80bf609dd45c7542fa5b26e6f908d6eed06b72f336fd0ff64736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "99:772:0:-:0;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "99:772:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;699:170;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;334:42;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;383:310;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;699:170;783:12;;:::i;:::-;814:8;:48;844:9;855:4;833:27;;;;;;;;;:::i;:::-;;;;;;;;;;;;;823:38;;;;;;814:48;;;;;;;;;;;807:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;699:170;;;;:::o;334:42::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;383:310::-;479:19;;:::i;:::-;501:67;;;;;;;;527:5;501:67;;;;552:5;501:67;;;479:89;;636:6;579:8;:54;609:15;626:4;598:33;;;;;;;;;:::i;:::-;;;;;;;;;;;;;588:44;;;;;;579:54;;;;;;;;;;;:63;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;653:5;659:4;653:11;;;;;;:::i;:::-;;;;;;;;;;;;;670:15;653:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;383:310;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;6:442::-;;108:3;101:4;93:6;89:17;85:27;75:2;;126:1;123;116:12;75:2;163:6;150:20;185:65;200:49;242:6;200:49;:::i;:::-;185:65;:::i;:::-;176:74;;270:6;263:5;256:21;306:4;298:6;294:17;339:4;332:5;328:16;374:3;365:6;360:3;356:16;353:25;350:2;;;391:1;388;381:12;350:2;401:41;435:6;430:3;425;401:41;:::i;:::-;68:380;;;;;;;:::o;456:130::-;;536:6;523:20;514:29;;548:33;575:5;548:33;:::i;:::-;508:78;;;;:::o;593:472::-;;;724:2;712:9;703:7;699:23;695:32;692:2;;;740:1;737;730:12;692:2;803:1;792:9;788:17;775:31;826:18;818:6;815:30;812:2;;;858:1;855;848:12;812:2;878:63;933:7;924:6;913:9;909:22;878:63;:::i;:::-;868:73;;754:193;978:2;996:53;1041:7;1032:6;1021:9;1017:22;996:53;:::i;:::-;986:63;;957:98;686:379;;;;;:::o;1072:703::-;;;;1230:2;1218:9;1209:7;1205:23;1201:32;1198:2;;;1246:1;1243;1236:12;1198:2;1309:1;1298:9;1294:17;1281:31;1332:18;1324:6;1321:30;1318:2;;;1364:1;1361;1354:12;1318:2;1384:63;1439:7;1430:6;1419:9;1415:22;1384:63;:::i;:::-;1374:73;;1260:193;1484:2;1502:53;1547:7;1538:6;1527:9;1523:22;1502:53;:::i;:::-;1492:63;;1463:98;1620:2;1609:9;1605:18;1592:32;1644:18;1636:6;1633:30;1630:2;;;1676:1;1673;1666:12;1630:2;1696:63;1751:7;1742:6;1731:9;1727:22;1696:63;:::i;:::-;1686:73;;1571:194;1192:583;;;;;:::o;1782:327::-;;1884:39;1917:5;1884:39;:::i;:::-;1935:61;1989:6;1984:3;1935:61;:::i;:::-;1928:68;;2001:52;2046:6;2041:3;2034:4;2027:5;2023:16;2001:52;:::i;:::-;2074:29;2096:6;2074:29;:::i;:::-;2069:3;2065:39;2058:46;;1864:245;;;;;:::o;2116:347::-;;2228:39;2261:5;2228:39;:::i;:::-;2279:71;2343:6;2338:3;2279:71;:::i;:::-;2272:78;;2355:52;2400:6;2395:3;2388:4;2381:5;2377:16;2355:52;:::i;:::-;2428:29;2450:6;2428:29;:::i;:::-;2423:3;2419:39;2412:46;;2208:255;;;;;:::o;2470:360::-;;2600:39;2633:5;2600:39;:::i;:::-;2651:89;2733:6;2728:3;2651:89;:::i;:::-;2644:96;;2745:52;2790:6;2785:3;2778:4;2771:5;2767:16;2745:52;:::i;:::-;2818:6;2813:3;2809:16;2802:23;;2580:250;;;;;:::o;2888:561::-;;3029:4;3024:3;3020:14;3112:4;3105:5;3101:16;3095:23;3124:63;3181:4;3176:3;3172:14;3158:12;3124:63;:::i;:::-;3049:144;3266:4;3259:5;3255:16;3249:23;3318:3;3312:4;3308:14;3301:4;3296:3;3292:14;3285:38;3338:73;3406:4;3392:12;3338:73;:::i;:::-;3330:81;;3203:220;3440:4;3433:11;;3002:447;;;;;:::o;3456:103::-;3529:24;3547:5;3529:24;:::i;:::-;3524:3;3517:37;3511:48;;:::o;3566:113::-;3649:24;3667:5;3649:24;:::i;:::-;3644:3;3637:37;3631:48;;:::o;3686:275::-;;3841:95;3932:3;3923:6;3841:95;:::i;:::-;3834:102;;3953:3;3946:10;;3822:139;;;;:::o;3968:350::-;;4135:2;4124:9;4120:18;4112:26;;4185:9;4179:4;4175:20;4171:1;4160:9;4156:17;4149:47;4210:98;4303:4;4294:6;4210:98;:::i;:::-;4202:106;;4106:212;;;;:::o;4325:222::-;;4452:2;4441:9;4437:18;4429:26;;4466:71;4534:1;4523:9;4519:17;4510:6;4466:71;:::i;:::-;4423:124;;;;:::o;4554:421::-;;4729:2;4718:9;4714:18;4706:26;;4743:71;4811:1;4800:9;4796:17;4787:6;4743:71;:::i;:::-;4862:9;4856:4;4852:20;4847:2;4836:9;4832:18;4825:48;4887:78;4960:4;4951:6;4887:78;:::i;:::-;4879:86;;4700:275;;;;;:::o;4982:256::-;;5044:2;5038:9;5028:19;;5082:4;5074:6;5070:17;5181:6;5169:10;5166:22;5145:18;5133:10;5130:34;5127:62;5124:2;;;5202:1;5199;5192:12;5124:2;5222:10;5218:2;5211:22;5022:216;;;;:::o;5245:322::-;;5389:18;5381:6;5378:30;5375:2;;;5421:1;5418;5411:12;5375:2;5488:4;5484:9;5477:4;5469:6;5465:17;5461:33;5453:41;;5552:4;5546;5542:15;5534:23;;5312:255;;;:::o;5574:122::-;;5668:5;5662:12;5652:22;;5633:63;;;:::o;5704:153::-;;5809:6;5804:3;5797:19;5846:4;5841:3;5837:14;5822:29;;5790:67;;;;:::o;5866:163::-;;5981:6;5976:3;5969:19;6018:4;6013:3;6009:14;5994:29;;5962:67;;;;:::o;6038:145::-;;6174:3;6159:18;;6152:31;;;;:::o;6191:72::-;;6253:5;6242:16;;6236:27;;;:::o;6271:145::-;6352:6;6347:3;6342;6329:30;6408:1;6399:6;6394:3;6390:16;6383:27;6322:94;;;:::o;6425:268::-;6490:1;6497:101;6511:6;6508:1;6505:13;6497:101;;;6587:1;6582:3;6578:11;6572:18;6568:1;6563:3;6559:11;6552:39;6533:2;6530:1;6526:10;6521:15;;6497:101;;;6613:6;6610:1;6607:13;6604:2;;;6678:1;6669:6;6664:3;6660:16;6653:27;6604:2;6474:219;;;;:::o;6701:97::-;;6789:2;6785:7;6780:2;6773:5;6769:14;6765:28;6755:38;;6749:49;;;:::o;6806:117::-;6875:24;6893:5;6875:24;:::i;:::-;6868:5;6865:35;6855:2;;6914:1;6911;6904:12;6855:2;6849:74;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0 <0.7.0;\npragma experimental ABIEncoderV2;\n\ncontract Archive {\n    struct Entry {\n        // 0 = Style\n        // 1 = Style\n        uint kind;\n        string body;\n    }\n\n    // TimedURL => Content\n    mapping (bytes32 => Entry) private archives;\n\n    // URL => List of TIME\n    mapping (string => uint256[]) public times;\n\n    function pushArchive(string memory _url, uint _kind, string memory _body) \n    public {\n        Entry memory _entry = Entry({\n            kind: _kind,\n            body: _body\n        });\n\n        archives[keccak256(abi.encode(block.timestamp, _url))] = _entry;\n\n        times[_url].push(block.timestamp);\n    }\n\n    function getArchive(string memory _url, uint256 timestamp)\n    public view returns (Entry memory) {\n        return archives[keccak256(abi.encode(timestamp, _url))];\n    }\n}\n",
  "sourcePath": "/home/zacknuv/projects/assignments/2025_2/BLK0/blockchain/contracts/Archive.sol",
  "ast": {
    "absolutePath": "project:/contracts/Archive.sol",
    "exportedSymbols": {
      "Archive": [
        75
      ]
    },
    "id": 76,
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
        "id": 75,
        "linearizedBaseContracts": [
          75
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
                "src": "187:9:0",
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
                  "src": "187:4:0",
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
                "src": "206:11:0",
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
                  "src": "206:6:0",
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
            "scope": 75,
            "src": "122:102:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 11,
            "mutability": "mutable",
            "name": "archives",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 75,
            "src": "257:43:0",
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
                "src": "266:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "257:26:0",
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
                "src": "277:5:0",
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
            "scope": 75,
            "src": "334:42:0",
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
                "src": "343:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "334:29:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(string => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 13,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "353:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 14,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "353:9:0",
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
              "src": "469:224:0",
              "statements": [
                {
                  "assignments": [
                    26
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 26,
                      "mutability": "mutable",
                      "name": "_entry",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 53,
                      "src": "479:19:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$7_memory_ptr",
                        "typeString": "struct Archive.Entry"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 25,
                        "name": "Entry",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 7,
                        "src": "479:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Entry_$7_storage_ptr",
                          "typeString": "struct Archive.Entry"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 31,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 28,
                        "name": "_kind",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20,
                        "src": "527:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 29,
                        "name": "_body",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "552:5:0",
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
                      "id": 27,
                      "name": "Entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "501:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Entry_$7_storage_ptr_$",
                        "typeString": "type(struct Archive.Entry storage pointer)"
                      }
                    },
                    "id": 30,
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
                    "src": "501:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$7_memory_ptr",
                      "typeString": "struct Archive.Entry memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "479:89:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 43,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "archives",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "579:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$7_storage_$",
                          "typeString": "mapping(bytes32 => struct Archive.Entry storage ref)"
                        }
                      },
                      "id": 41,
                      "indexExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 36,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -4,
                                  "src": "609:5:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 37,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "timestamp",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "609:15:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 38,
                                "name": "_url",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "626:4:0",
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
                                "id": 34,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "598:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 35,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encode",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "598:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 39,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "598:33:0",
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
                          "id": 33,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "588:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
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
                        "src": "588:44:0",
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
                      "src": "579:54:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$7_storage",
                        "typeString": "struct Archive.Entry storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 42,
                      "name": "_entry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "636:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Entry_$7_memory_ptr",
                        "typeString": "struct Archive.Entry memory"
                      }
                    },
                    "src": "579:63:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$7_storage",
                      "typeString": "struct Archive.Entry storage ref"
                    }
                  },
                  "id": 44,
                  "nodeType": "ExpressionStatement",
                  "src": "579:63:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 49,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "670:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 50,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "670:15:0",
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
                          "id": 45,
                          "name": "times",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16,
                          "src": "653:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(string memory => uint256[] storage ref)"
                          }
                        },
                        "id": 47,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 46,
                          "name": "_url",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "659:4:0",
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
                        "src": "653:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 48,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "653:16:0",
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
                    "src": "653:33:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 52,
                  "nodeType": "ExpressionStatement",
                  "src": "653:33:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "c1580dc3",
            "id": 54,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pushArchive",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 23,
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
                  "src": "404:18:0",
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
                    "src": "404:6:0",
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
                  "name": "_kind",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 54,
                  "src": "424:10:0",
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
                    "src": "424:4:0",
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
                  "name": "_body",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 54,
                  "src": "436:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "403:53:0"
            },
            "returnParameters": {
              "id": 24,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:0"
            },
            "scope": 75,
            "src": "383:310:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "797:72:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 63,
                      "name": "archives",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "814:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$7_storage_$",
                        "typeString": "mapping(bytes32 => struct Archive.Entry storage ref)"
                      }
                    },
                    "id": 71,
                    "indexExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 67,
                              "name": "timestamp",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58,
                              "src": "844:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 68,
                              "name": "_url",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56,
                              "src": "855:4:0",
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
                              "id": 65,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "833:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 66,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "encode",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "833:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "833:27:0",
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
                        "id": 64,
                        "name": "keccak256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -8,
                        "src": "823:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 70,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "823:38:0",
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
                    "src": "814:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$7_storage",
                      "typeString": "struct Archive.Entry storage ref"
                    }
                  },
                  "functionReturnParameters": 62,
                  "id": 72,
                  "nodeType": "Return",
                  "src": "807:55:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0a6ba75a",
            "id": 74,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getArchive",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 59,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "mutability": "mutable",
                  "name": "_url",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "719:18:0",
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
                    "src": "719:6:0",
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
                  "id": 58,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "739:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 57,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "739:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "718:39:0"
            },
            "returnParameters": {
              "id": 62,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "783:12:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Entry_$7_memory_ptr",
                    "typeString": "struct Archive.Entry"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 60,
                    "name": "Entry",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 7,
                    "src": "783:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Entry_$7_storage_ptr",
                      "typeString": "struct Archive.Entry"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "782:14:0"
            },
            "scope": 75,
            "src": "699:170:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 76,
        "src": "99:772:0"
      }
    ],
    "src": "32:840:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/Archive.sol",
      "exportedSymbols": {
        "Archive": [
          75
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
            75
          ],
          "name": "Archive",
          "scope": 76
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "Archive.Entry",
              "name": "Entry",
              "scope": 75,
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
                    "src": "187:4:0"
                  }
                ],
                "id": 4,
                "name": "VariableDeclaration",
                "src": "187:9:0"
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
                    "src": "206:6:0"
                  }
                ],
                "id": 6,
                "name": "VariableDeclaration",
                "src": "206:11:0"
              }
            ],
            "id": 7,
            "name": "StructDefinition",
            "src": "122:102:0"
          },
          {
            "attributes": {
              "constant": false,
              "mutability": "mutable",
              "name": "archives",
              "overrides": null,
              "scope": 75,
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
                    "src": "266:7:0"
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
                    "src": "277:5:0"
                  }
                ],
                "id": 10,
                "name": "Mapping",
                "src": "257:26:0"
              }
            ],
            "id": 11,
            "name": "VariableDeclaration",
            "src": "257:43:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "952eeb62",
              "mutability": "mutable",
              "name": "times",
              "overrides": null,
              "scope": 75,
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
                    "src": "343:6:0"
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
                        "src": "353:7:0"
                      }
                    ],
                    "id": 14,
                    "name": "ArrayTypeName",
                    "src": "353:9:0"
                  }
                ],
                "id": 15,
                "name": "Mapping",
                "src": "334:29:0"
              }
            ],
            "id": 16,
            "name": "VariableDeclaration",
            "src": "334:42:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "c1580dc3",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "pushArchive",
              "overrides": null,
              "scope": 75,
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
                        "src": "404:6:0"
                      }
                    ],
                    "id": 18,
                    "name": "VariableDeclaration",
                    "src": "404:18:0"
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
                        "id": 19,
                        "name": "ElementaryTypeName",
                        "src": "424:4:0"
                      }
                    ],
                    "id": 20,
                    "name": "VariableDeclaration",
                    "src": "424:10:0"
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
                        "id": 21,
                        "name": "ElementaryTypeName",
                        "src": "436:6:0"
                      }
                    ],
                    "id": 22,
                    "name": "VariableDeclaration",
                    "src": "436:19:0"
                  }
                ],
                "id": 23,
                "name": "ParameterList",
                "src": "403:53:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 24,
                "name": "ParameterList",
                "src": "469:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        26
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
                            "id": 25,
                            "name": "UserDefinedTypeName",
                            "src": "479:5:0"
                          }
                        ],
                        "id": 26,
                        "name": "VariableDeclaration",
                        "src": "479:19:0"
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
                            "id": 27,
                            "name": "Identifier",
                            "src": "501:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 20,
                              "type": "uint256",
                              "value": "_kind"
                            },
                            "id": 28,
                            "name": "Identifier",
                            "src": "527:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 22,
                              "type": "string memory",
                              "value": "_body"
                            },
                            "id": 29,
                            "name": "Identifier",
                            "src": "552:5:0"
                          }
                        ],
                        "id": 30,
                        "name": "FunctionCall",
                        "src": "501:67:0"
                      }
                    ],
                    "id": 31,
                    "name": "VariableDeclarationStatement",
                    "src": "479:89:0"
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
                                "id": 32,
                                "name": "Identifier",
                                "src": "579:8:0"
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
                                    "id": 33,
                                    "name": "Identifier",
                                    "src": "588:9:0"
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
                                            "id": 34,
                                            "name": "Identifier",
                                            "src": "598:3:0"
                                          }
                                        ],
                                        "id": 35,
                                        "name": "MemberAccess",
                                        "src": "598:10:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "timestamp",
                                          "referencedDeclaration": null,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": -4,
                                              "type": "block",
                                              "value": "block"
                                            },
                                            "id": 36,
                                            "name": "Identifier",
                                            "src": "609:5:0"
                                          }
                                        ],
                                        "id": 37,
                                        "name": "MemberAccess",
                                        "src": "609:15:0"
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
                                        "id": 38,
                                        "name": "Identifier",
                                        "src": "626:4:0"
                                      }
                                    ],
                                    "id": 39,
                                    "name": "FunctionCall",
                                    "src": "598:33:0"
                                  }
                                ],
                                "id": 40,
                                "name": "FunctionCall",
                                "src": "588:44:0"
                              }
                            ],
                            "id": 41,
                            "name": "IndexAccess",
                            "src": "579:54:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 26,
                              "type": "struct Archive.Entry memory",
                              "value": "_entry"
                            },
                            "id": 42,
                            "name": "Identifier",
                            "src": "636:6:0"
                          }
                        ],
                        "id": 43,
                        "name": "Assignment",
                        "src": "579:63:0"
                      }
                    ],
                    "id": 44,
                    "name": "ExpressionStatement",
                    "src": "579:63:0"
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
                                    "id": 45,
                                    "name": "Identifier",
                                    "src": "653:5:0"
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
                                    "id": 46,
                                    "name": "Identifier",
                                    "src": "659:4:0"
                                  }
                                ],
                                "id": 47,
                                "name": "IndexAccess",
                                "src": "653:11:0"
                              }
                            ],
                            "id": 48,
                            "name": "MemberAccess",
                            "src": "653:16:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "timestamp",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -4,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 49,
                                "name": "Identifier",
                                "src": "670:5:0"
                              }
                            ],
                            "id": 50,
                            "name": "MemberAccess",
                            "src": "670:15:0"
                          }
                        ],
                        "id": 51,
                        "name": "FunctionCall",
                        "src": "653:33:0"
                      }
                    ],
                    "id": 52,
                    "name": "ExpressionStatement",
                    "src": "653:33:0"
                  }
                ],
                "id": 53,
                "name": "Block",
                "src": "469:224:0"
              }
            ],
            "id": 54,
            "name": "FunctionDefinition",
            "src": "383:310:0"
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
              "scope": 75,
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
                      "scope": 74,
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
                        "src": "719:6:0"
                      }
                    ],
                    "id": 56,
                    "name": "VariableDeclaration",
                    "src": "719:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "timestamp",
                      "overrides": null,
                      "scope": 74,
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
                        "id": 57,
                        "name": "ElementaryTypeName",
                        "src": "739:7:0"
                      }
                    ],
                    "id": 58,
                    "name": "VariableDeclaration",
                    "src": "739:17:0"
                  }
                ],
                "id": 59,
                "name": "ParameterList",
                "src": "718:39:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 74,
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
                        "id": 60,
                        "name": "UserDefinedTypeName",
                        "src": "783:5:0"
                      }
                    ],
                    "id": 61,
                    "name": "VariableDeclaration",
                    "src": "783:12:0"
                  }
                ],
                "id": 62,
                "name": "ParameterList",
                "src": "782:14:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 62
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
                            "id": 63,
                            "name": "Identifier",
                            "src": "814:8:0"
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
                                "id": 64,
                                "name": "Identifier",
                                "src": "823:9:0"
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
                                        "id": 65,
                                        "name": "Identifier",
                                        "src": "833:3:0"
                                      }
                                    ],
                                    "id": 66,
                                    "name": "MemberAccess",
                                    "src": "833:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 58,
                                      "type": "uint256",
                                      "value": "timestamp"
                                    },
                                    "id": 67,
                                    "name": "Identifier",
                                    "src": "844:9:0"
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
                                    "id": 68,
                                    "name": "Identifier",
                                    "src": "855:4:0"
                                  }
                                ],
                                "id": 69,
                                "name": "FunctionCall",
                                "src": "833:27:0"
                              }
                            ],
                            "id": 70,
                            "name": "FunctionCall",
                            "src": "823:38:0"
                          }
                        ],
                        "id": 71,
                        "name": "IndexAccess",
                        "src": "814:48:0"
                      }
                    ],
                    "id": 72,
                    "name": "Return",
                    "src": "807:55:0"
                  }
                ],
                "id": 73,
                "name": "Block",
                "src": "797:72:0"
              }
            ],
            "id": 74,
            "name": "FunctionDefinition",
            "src": "699:170:0"
          }
        ],
        "id": 75,
        "name": "ContractDefinition",
        "src": "99:772:0"
      }
    ],
    "id": 76,
    "name": "SourceUnit",
    "src": "32:840:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.12+commit.27d51765.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xA2312E10E4b6C143a586AaE1F7C283b8Aa2451E6",
      "transactionHash": "0x08ad3e0dbe9afe84eb52087cb541ef1c2c2d15a463ea7481407fffb90300af56"
    }
  },
  "schemaVersion": "3.4.16",
  "updatedAt": "2025-10-09T09:10:21.696Z",
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
