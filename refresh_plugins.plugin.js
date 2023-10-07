/**
 * @name RefreshPlugins
 * @author Airaga
 * @description Refreshes all your plugins with one button. 
 * @version 1.0.0
 */

module.exports = class RefreshPlugins {
    constructor(meta) {
      setTimeout(() => {
        this.createButton();
    }, 2000);
    }

    createButton() {
      const button = document.createElement('button');
      button.textContent = 'Refresh Plugins';
      button.style.backgroundColor = '#7289DA';
      button.style.color = '#FFFFFF';
      button.style.border = 'none';
      button.style.borderRadius = '3px';
      button.style.padding = '6px 10px';
      button.style.margin = '0 4px';
      button.style.fontWeight = 'bold';
      button.style.cursor = 'pointer';
      button.addEventListener('click', this.refreshPlugins);
      const toolbar = document.querySelector('.toolbar-3_r2xA');
      toolbar.appendChild(button);
  }

    refreshPlugins()
    {
      let pluginArray = BdApi.Plugins.getAll();

      for(let i = 0; i < pluginArray.length; i++)
      {
        if(pluginArray[i].name == "RefreshPlugins")
        {
          continue;
        }

        if(BdApi.Plugins.isEnabled(pluginArray[i].name))
        {
          BdApi.Plugins.toggle(pluginArray[i].name);
          BdApi.Plugins.toggle(pluginArray[i].name);
        }
      }
    }
    
    start() {
    }
  
    stop() {
    }

    
  };