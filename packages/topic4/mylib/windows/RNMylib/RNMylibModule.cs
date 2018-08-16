using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Mylib.RNMylib
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNMylibModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNMylibModule"/>.
        /// </summary>
        internal RNMylibModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNMylib";
            }
        }
    }
}
