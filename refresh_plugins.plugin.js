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
    button.textContent = 'R';
    button.style.color = '#FFFFFF';
    button.style.padding = '0px 0px';
    button.style.margin = '0 0px';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';
    button.style.width = 'auto';
    button.style.backgroundColor = 'rgba(114, 137, 218, 0)';
    button.addEventListener('click', this.refreshPlugins);
    const toolbar = document.querySelector('.container-YkUktl');
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