<?php

namespace App\Packages\MetaAudio;

use App\Packages\MetaAudio\Modules\ModuleInterface;

/**
 * Manages which modules are active and their priority sequence.
 */
interface ModuleManagerInterface
{
    /**
     * Add a module to the stack.
     *
     * @param ModuleInterface The module object to add
     *
     * @return $this
     */
    public function addModule(ModuleInterface $module);


    /**
     * Add the default set of modules the library ships with.
     *
     * @return $this
     */
    public function addDefaultModules();


    /**
     * Remove all previously defined modules.
     *
     * @return $this
     */
    public function clearModules();
}
