// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.7.0;

contract Archive {
    // TimedURL => Content
    mapping (bytes32 => string) private archives;

    // URL => List of TIME
    mapping (string => uint256[]) public times;

    function pushArchive(string memory _url, string memory _content) 
    public {
        archives[keccak256(abi.encode(block.timestamp, _url))] = _content;

        times[_url].push(block.timestamp);
    }

    function getArchive(string memory _url, uint256 timestamp)
    public view returns (string memory) {
        return archives[keccak256(abi.encode(timestamp, _url))];
    }
}
