import React from 'react';
interface MobileMenuProps {
    message: string;
}
const MobileMenu: React.FC<MobileMenuProps> = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
}
export default MobileMenu;