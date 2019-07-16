class Plugin {
	constructor () {
		console.log('Plugin...');
	}
	
	test () {
		console.log('Test feature');
	}
	
	getDisplayName()
	{
		console.log('getDisplayName');
		return "JoyAether";
	}
	
	getLanguage()
	{
		console.log('getLanguage');
		return "zh-en";
	}
	
	requestGameData(gameId)
	{
		console.log('requestGameData');
	}
	
	updateGameData(gameId, gameData)
	{
		console.log('updateGameData');
	}
};
