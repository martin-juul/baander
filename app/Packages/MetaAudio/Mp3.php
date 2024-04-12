<?php

namespace App\Packages\MetaAudio;

/**
 * Read/write tags from an mp3 file.
 * @mixin \App\Packages\MetaAudio\Modules\Ape
 * @mixin \App\Packages\MetaAudio\Modules\Id3v1
 * @mixin \App\Packages\MetaAudio\Modules\Id3v2
 */
class Mp3 implements ModuleManagerInterface
{
    use ModuleManager;

    /**
     * @var FileInterface $file The file handler.
     */
    private $file;


    /**
     * Create a new instance from a local file.
     *
     * @param FileInterface $file The file to work with
     */
    public function __construct(FileInterface $file)
    {
        $this->file = $file;
    }


    /**
     * Get a string from the active modules.
     *
     * Modules should be loaded in priority sequence as this method returns the first match.
     *
     * @param string $method The method name to call on the modules
     *
     * @return string
     */
    private function getModuleString(string $method): string
    {
        foreach ($this->getModules() as $module) {
            $module->open($this->file);
            $result = $module->$method();
            if (is_string($result) && $result !== '') {
                return $result;
            }
        }

        return "";
    }


    /**
     * Get an integer from the active modules.
     *
     * Modules should be loaded in priority sequence as this method returns the first match.
     *
     * @param string $method The method name to call on the modules
     *
     * @return int
     */
    private function getModuleInt(string $method): int
    {
        foreach ($this->getModules() as $module) {
            $module->open($this->file);
            $result = $module->$method();
            if (is_numeric($result) && $result > 0) {
                return (int)$result;
            }
        }

        return 0;
    }


    /**
     * Get the track title.
     *
     * @return string
     */
    public function getTitle(): string
    {
        return $this->getModuleString(__FUNCTION__);
    }


    /**
     * Get the track number.
     *
     * @return int
     */
    public function getTrackNumber(): int
    {
        return $this->getModuleInt(__FUNCTION__);
    }


    /**
     * Get the artist name.
     *
     * @return string
     */
    public function getArtist(): string
    {
        return $this->getModuleString(__FUNCTION__);
    }


    /**
     * Get the album name.
     *
     * @return string
     */
    public function getAlbum(): string
    {
        return $this->getModuleString(__FUNCTION__);
    }


    /**
     * Get the release year.
     *
     * @return int
     */
    public function getYear(): int
    {
        return $this->getModuleInt(__FUNCTION__);
    }

    /**
     * Get the album artwork
     *
     * @return string
     */
    public function getArtwork(): string
    {
        return $this->getModuleString(__FUNCTION__);
    }


    /**
     * Set a value using all active modules.
     *
     * @param string $method The method name to call on the modules
     * @param mixed $value The value to pass to the module method
     *
     * @return $this
     */
    private function setModuleValue(string $method, mixed $value): static
    {
        foreach ($this->modules as $module) {
            $module->open($this->file);
            $module->$method($value);
        }

        return $this;
    }


    /**
     * Set the track title.
     *
     * @param string $title The title name
     *
     * @return $this
     */
    public function setTitle(string $title): static
    {
        return $this->setModuleValue(__FUNCTION__, $title);
    }

    /**
     * Set the track number.
     *
     * @param int $track The track number
     *
     * @return $this
     */
    public function setTrackNumber(int $track): static
    {
        return $this->setModuleValue(__FUNCTION__, $track);
    }


    /**
     * Set the artist name.
     *
     * @param string $artist The artist name
     *
     * @return $this
     */
    public function setArtist(string $artist): static
    {
        return $this->setModuleValue(__FUNCTION__, $artist);
    }

    /**
     * Set the album name.
     *
     * @param string $album The album name
     *
     * @return $this
     */
    public function setAlbum(string $album): static
    {
        return $this->setModuleValue(__FUNCTION__, $album);
    }

    /**
     * Set the release year.
     *
     * @param int $year The release year
     *
     * @return $this
     */
    public function setYear(int $year): static
    {
        return $this->setModuleValue(__FUNCTION__, $year);
    }


    /**
     * Save the changes currently pending.
     *
     * @return $this
     */
    public function save(): static
    {
        foreach ($this->getModules() as $module) {
            $module->open($this->file);
            $module->save();
        }

        return $this;
    }
}
