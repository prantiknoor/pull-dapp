// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "./Owner.sol";

contract PullContract is Owner {
    uint256 public pullCharge = 0.1 ether;
    uint32 public pullCount = 0;
    mapping(uint32 => Pull) public pulls;

    struct Pull {
        uint32 id;
        address owner;
        string title;
        string[] options;
        address[] voters;
        mapping(address => uint8) votes;
        uint256 postTime;
        uint256 endTime;
    }

    event PullCreation(uint32 indexed id, address indexed owner, string title);
    event VoteOnPull(uint32 indexed id, address indexed voter, uint8 option);

    modifier pullExist(uint32 _id) {
        require(_id < pullCount, "No Pull has been found.");
        _;
    }

    modifier pullAlive(uint32 _id) {
        require(_id < pullCount, "No Pull has been found.");
        require(pulls[_id].endTime > block.timestamp, "The Pull is end.");
        _;
    }

    function updatePullCharge(uint256 _newCharge) external isOwner {
        pullCharge = _newCharge;
    }

    // _duratin should be in second.
    function createPull(string memory _title, string[] memory _options, uint256 _duration) external payable {
        require(msg.value >= pullCharge, "You need to pay specific amount of charge to create a pull.");
        require(_options.length > 1 && _options.length <= 9, "A Pull must have 2-9 options.");
        require(_duration >= 10 minutes && _duration < 30 days, "A Pull have have 10 min to 30 days duration");

        Pull storage pull = pulls[pullCount];

        pull.id = pullCount;
        pull.owner = msg.sender;
        pull.title = _title;
        pull.options = _options;
        pull.postTime = block.timestamp;
        pull.endTime = block.timestamp + _duration;

        emit PullCreation(pullCount++, msg.sender, _title);
    }

    function voteOnPull(uint32 _id, uint8 _option) external pullAlive(_id) {
        Pull storage pull = pulls[_id];

        require(_option > 0 && _option <= pull.options.length, "Invalid option.");

        if(pull.votes[msg.sender] == 0) {
            pull.voters.push(msg.sender);
        }

        pull.votes[msg.sender] = _option;

        emit VoteOnPull(_id, msg.sender, _option);
    }

    function closePull(uint32 _id) external pullAlive(_id) {
        require(msg.sender == pulls[_id].owner, "You are not the owner of the pull.");
        
        pulls[_id].endTime = block.timestamp;
    }

    function reaminingTimeOfPull(uint32 _id) external view pullExist(_id) returns(uint256) {
        if(pulls[_id].endTime < block.timestamp) {
            return 0;
        } 

        return pulls[_id].endTime - block.timestamp;
    }

    function getOptionsOfPull(uint32 _id) external view pullExist(_id) returns(string[] memory) {
        return pulls[_id].options;
    }

    function getVotesByOption(uint32 _id) external view pullAlive(_id) returns(uint32[] memory) {
        Pull storage pull = pulls[_id];
        uint32[] memory votes = new uint32[](pull.options.length);

        for(uint i = 0; i < pull.voters.length; i++) {
            votes[pull.votes[pull.voters[i]]-1]++;
        }

        return votes;
    }
}