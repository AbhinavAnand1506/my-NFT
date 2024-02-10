/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
//created an array that can hold multiple values
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _bling) {
    const NFT = {
    "name": _name,
    "eyeColor": _eyeColor,
    "shirtType": _shirtType,
    "bling" : _bling,
    }
    //push this object to the array so it can be stored in the nfts
NFTs.push(NFT);
}

// create a " for loop" that will go through an "array" of NFT's

// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i< NFTs.length; i++){
        console.log("Name:" + NFTs[i].name);
        console.log("EyeColor:" + NFTs[i].eyeColor);
        console.log("Shirt Type:" + NFTs[i].shirtType);
        console.log("Bling: " + NFTs[i].bling);
        console.log("\n");
    }
}

// print the total number of NFTs we have minted to the console
//total supply should return the number of nfts, i have console.log this
function getTotalSupply() {
    //it is a function that returns tha size of an array
    console.log("Total NFTs: " + NFTs.length);

}

// call your functions below this line
mintNFT("Bob", "Blue", "Hoodie","Gold Chain");
mintNFT("Tim", "Red", "Jacket","Diamond Chain");
mintNFT("Sue", "Green", "Shirt","Silver chain");
mintNFT("John", "Yellow", "T-Shirt","Bronze Chain");
// here i have called the list function which will console out the metadata of the NFTs present here
listNFTs();
//gettotalsupply will console out the NFTs present in the array 
getTotalSupply();

