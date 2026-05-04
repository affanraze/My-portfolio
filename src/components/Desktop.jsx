import React, { useState } from 'react';
import DesktopIcon from './DesktopIcon';
import { PersonIcon, DocumentIcon, IEIcon, ContactIcon, MyComputerIcon, ImageIcon } from './XPIcons';

export default function Desktop({ onOpenMyComputer, onOpenAboutMe, onOpenResume, onOpenMyProjects, onOpenContact, onOpenMyArt }) {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
    { id: 'my-computer', label: 'My Computer', Icon: MyComputerIcon, onOpen: onOpenMyComputer },
    { id: 'my-projects', label: 'My Projects', Icon: IEIcon, onOpen: onOpenMyProjects },
    { id: 'my-art', label: 'My Art', Icon: ImageIcon, onOpen: onOpenMyArt },
    { id: 'about-me', label: 'About Me', Icon: PersonIcon, onOpen: onOpenAboutMe },
    { id: 'resume', label: 'My Resume', Icon: DocumentIcon, onOpen: onOpenResume },
    { id: 'contact', label: 'Contact Me', Icon: ContactIcon, onOpen: onOpenContact },
  ];

  return (
    <div
      className="desktop"
      onClick={(e) => {
        if (e.target === e.currentTarget || e.target.classList.contains('desktop-area')) {
          setSelectedIcon(null);
        }
      }}
    >
      <div className="desktop-area" onClick={(e) => {
        if (e.target === e.currentTarget) setSelectedIcon(null);
      }}>
        {icons.map(icon => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            Icon={icon.Icon}
            selected={selectedIcon === icon.id}
            onSelect={() => setSelectedIcon(icon.id)}
            onOpen={icon.onOpen}
          />
        ))}
      </div>
    </div>
  );
}
