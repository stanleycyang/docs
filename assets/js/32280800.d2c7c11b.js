"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[827],{728:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={sidebar_position:3},c="Basic Single Item Auction End To End",l={unversionedId:"architecture/basic_flow",id:"architecture/basic_flow",isDocsHomePage:!1,title:"Basic Single Item Auction End To End",description:"Now that we've gone over the contracts, let's run through an example of how the contracts interact to create an NFT and sell it. I personally find these stories the most informative way to learn a new ecosystem.",source:"@site/docs/architecture/basic_flow.md",sourceDirName:"architecture",slug:"/architecture/basic_flow",permalink:"/docs/architecture/basic_flow",editUrl:"https://github.com/metaplex/docs/docs/architecture/basic_flow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"The Contracts",permalink:"/docs/architecture/contracts"},next:{title:"Overview",permalink:"/docs/architecture/deep_dive/overview"}},h=[],d={toc:h};function p(t){var e=t.components,a=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-single-item-auction-end-to-end"},"Basic Single Item Auction End To End"),(0,i.kt)("p",null,"Now that we've gone over the contracts, let's run through an example of how the contracts interact to create an NFT and sell it. I personally find these stories the most informative way to learn a new ecosystem."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You allocate space for a mint account and a token account using Solana's system command and then you use spl-token JS SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"createMint")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"createTokenAccount")," commands to create a new mint and a new token account of that mint. You then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintTo")," command to mint a single token to that token account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You now want to label this token account as a MasterEdition NFT that has a limited supply of 10 possible Limited Edition Prints. Cool! To begin with, you make a call to the Token Metadata's ",(0,i.kt)("inlineCode",{parentName:"p"},"create_metadata_account"),' endpoint, naming it the "Bob\'s Cool NFT" mint with symbol "BOB" and you pass in a link to a picture of your Uncle Bob for the URI. This command creates a Metadata account with a PDA seed of ',(0,i.kt)("inlineCode",{parentName:"p"},"['metadata', metadata_program_id, your_mint_id]")," relative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata_program_id"),"."),(0,i.kt)("p",{parentName:"li"},"Note that the flow on the front end is a bit different - we put a dummy URI in place during this call, just to get the mint and metadata made, so that we can then push these values up to Arweave. Then we take the Arweave URL, and do a follow-up update_metadata_account call to update the Metadata with a proper URI that points to the metadata on the Arweave chain. It's a chicken-or-egg problem work-around because we need to have the Metadata existing to put it on Arweave, but we need the Arweave URI to place it in the Metadata. We simplify the case for this example.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next up, you need to turn this normal run of the mill NFT into a Master Edition. Right now you can still mint any number of tokens as you retain minting authority. The point of Metadata is to label mints - not just NFTs. So you call the create_master_edition endpoint on the Token Metadata contract which takes minting authority away from you, and creates a new Master Edition pda that contains information about how large a supply you want to have."),(0,i.kt)("p",{parentName:"li"},"When you want to mint Editions now, you'll need to present a token account containing the token from this Master Edition mint as proof of ownership and authority to do so. This is why we will later hand this token over to the Auction Manager, so that it can do the same to print off Editions for winners!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now that your token account has a bonafide NFT Master Edition in it, we can run an auction where we auction off Limited Edition prints! Let's say we want to auction off three such prints.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, we create a token vault using the ",(0,i.kt)("inlineCode",{parentName:"p"},"init_vault")," endpoint of the token vault contract. We'll store our master edition token in it by adding it to the vault using the ",(0,i.kt)("inlineCode",{parentName:"p"},"add_token_to_inactive_vault")," endpoint. This will create a safety deposit box in the vault that contains the the token.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then we will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"activate_vault")," command which ",(0,i.kt)("strong",{parentName:"p"},"Activates")," the vault, locking everything inside.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We now ",(0,i.kt)("strong",{parentName:"p"},"Combine")," the vault using ",(0,i.kt)("inlineCode",{parentName:"p"},"combine_vault"),', which is to say, we "open it," so the current authority could if they wanted withdraw the tokens inside it. The Auction Manager can only work with vaults in this state, which is why we have to go through the ',(0,i.kt)("strong",{parentName:"p"},"Activation")," phase to get here even though it seems a little nonsensical. See the in depth guide for more color on why these different states exist.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next up, we create the auction, and we say its resource is this vault. The auction has not yet been started, but it has the right resource (the vault). We do this via the ",(0,i.kt)("inlineCode",{parentName:"p"},"create_auction")," command on the Auction contract.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now that we have an auction and a vault, we can go and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"init_auction_manager")," endpoint on the Metaplex contract with both of these accounts among a few others to create an AuctionManager, which ties them both together. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"init_auction_manager")," takes a special struct called AuctionManagerSettings that allows one to specify how many winners there are and what winners get which items from which safety deposit box. At this point, we can't yet start the auction. The AuctionManager is in an invalidated state and we need to validate it by validating that the safety deposit boxes we provided to it in the vault are actually what we said are in them when we provided the AuctionManager with it's settings struct.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Before we begin validation, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"set_authority")," on both the vault and auction to change its authority to the auction manager, so that it has control over both of those structs. This is a requirement for the validation phase and the rest of the contract lifecycle. ",(0,i.kt)("strong",{parentName:"p"},"Now you no longer have control over your items."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We call the ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_safety_deposit_box")," endpoint on the Metaplex contract with the one safety deposit box in the vault, and the logic in this endpoint checks that there are exactly 3 printing tokens from the right mint in this box, matching the 3 printing tokens we promised it would have in our AuctionManagerSettings. Once we do this, and because this is the only safety deposit box in the vault, the AuctionManager is now validated.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We now call ",(0,i.kt)("inlineCode",{parentName:"p"},"start_auction")," on the Metaplex contract, which, because the AuctionManager has authority over the Auction, calls ",(0,i.kt)("inlineCode",{parentName:"p"},"start_auction")," on the Auction contract, and the auction begins!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Users can go and call ",(0,i.kt)("inlineCode",{parentName:"p"},"place_bid")," on the Auction contract to place bids. When they do this, tokens of the ",(0,i.kt)("inlineCode",{parentName:"p"},"token_mint")," type used by the auction are taken from the account they provide, tied to their main wallet, and stored in bidder pot accounts in the auction contract.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In order to update a bid, a user must first cancel the original bid, and then place a new bid.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the auction is over, a user can refund their bid if they did not win by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"cancel_bid")," again. Winners of the auction cannot cancel their bids.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The winner of a bid creates a mint with decimals 0, a token account with 1 token in it, and calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"redeem_printing_v2_bid")," endpoint on the Metaplex contract, all in a single transaction. This token is now ",(0,i.kt)("em",{parentName:"p"},"officially"),' a Limited Edition of the "Bob\'s Cool NFT" Master Edition NFT!')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You, the auctioneer, visits /#/auction/id/billing and hit the settle button. This first iterates over all three bidders and for each wallet used, calls ",(0,i.kt)("inlineCode",{parentName:"p"},"claim_bid")," on the Metaplex contract, which proxy-calls a ",(0,i.kt)("inlineCode",{parentName:"p"},"claim_bid")," on the Auction contract, telling it to dump the winner's payment into an escrow account called ",(0,i.kt)("inlineCode",{parentName:"p"},"accept_payment")," on the AuctionManager struct. It has the same token type as the auction. Once all payments have been collected, the front end then calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"empty_payment_account")," endpoint one time (since you are the only creator on the Metadata being sold) and the funds in this escrow are paid out to a token account provided of the same type owned by you."),(0,i.kt)("p",{parentName:"li"},'Note that our front end reference implementation uses SOL as the "token type." This has some special caveats, namely that SOL isn\'t really an "spl token." It instead has a work-around called the "Wrapped SOL mint." This is a special mint that is often used in a transient account. What this means is that when we place a bid, we actually make a one-off system account, transfer lamports to it of your bid amount + rent, then label it an spl-token account of the wrapped sol type, use it to place the bid, then close it all in one transaction.'),(0,i.kt)("p",{parentName:"li"},"Special machinations in the spl token program then make this wrapped sol token account have a number of tokens with the proper decimals that map to the amount of SOL you transferred to it. We do a similar operation with cancelling, where we make a transient wrapped sol account, transfer cancelled bid funds to it, and then close the account, transferring funds out all in a single transaction. This is all done for ease of use. With settlements, when funds are disbursed to artists, we actually make a WSOL account for them and they have to close it by hand via a dropdown menu."),(0,i.kt)("p",{parentName:"li"},"The protocol operates off of generic spl tokens and has no opinions about WSOL specifically, but the front end reference implementation does. So take careful note!"))))}p.isMDXComponent=!0}}]);