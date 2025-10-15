// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.7.0;
pragma experimental ABIEncoderV2;

contract Archive {
    struct Entry {
        // Kind:
        // 00 = Head and Body
        // 10 = External Style
        // 20 = External Script
        // 30 = PNG Image
        // 31 = JPEG Image
        uint kind;
        string body;
    }

    // TimedURL => Content
    mapping (bytes32 => Entry) private archives;

    // URL => List of TIME
    mapping (string => uint256[]) public times;

    function pushArchive(string memory _url, uint _time, uint _kind, string memory _body) 
    public {
        Entry memory _entry = Entry({
            kind: _kind,
            body: _body
        });

        archives[keccak256(abi.encode(_time, _url))] = _entry;

        times[_url].push(_time);
    }

    function getTimesOfArchive(string memory _url) 
    public view returns (uint256[] memory) {
        return times[_url];
    }

    function getArchive(string memory _url, uint256 _time)
    public view returns (Entry memory) {
        return archives[keccak256(abi.encode(_time, _url))];
    }
}
