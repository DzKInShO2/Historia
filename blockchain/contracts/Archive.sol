// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.7.0;
pragma experimental ABIEncoderV2;

contract Archive {
    struct Entry {
        // 0 = Style
        // 1 = Style
        uint kind;
        string body;
    }

    // TimedURL => Content
    mapping (bytes32 => Entry) private archives;

    // URL => List of TIME
    mapping (string => uint256[]) public times;

    function pushArchive(string memory _url, uint _kind, string memory _body) 
    public {
        Entry memory _entry = Entry({
            kind: _kind,
            body: _body
        });

        archives[keccak256(abi.encode(block.timestamp, _url))] = _entry;

        times[_url].push(block.timestamp);
    }

    function getArchive(string memory _url, uint256 timestamp)
    public view returns (Entry memory) {
        return archives[keccak256(abi.encode(timestamp, _url))];
    }
}
