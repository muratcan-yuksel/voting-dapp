const { expect } = require("chai");

describe("Voting contract", function () {
  let Voting;
  let voting;

  beforeEach(async function () {
    Voting = await ethers.getContractFactory("Voting");
    voting = await Voting.deploy();
    await voting.deployed();
  });

  describe("addProposal", function () {
    it("should add a new proposal", async function () {
      const title = "New proposal";
      const description = "This is a new proposal.";
      const tx = await voting.addProposal(title, description);

      //   expect(tx).to.emit(voting, "ProposalAdded").withArgs(0, title);

      const proposal = await voting.proposals(0);
      expect(proposal.id).to.equal(0);
      expect(proposal.title).to.equal(title);
      expect(proposal.description).to.equal(description);
      expect(proposal.voteCount).to.equal(0);
      expect(proposal.yesVotes).to.equal(0);
      expect(proposal.noVotes).to.equal(0);
    });
  });
});
