import React, {useState, useEffect, useRef} from 'react'
import './Sidebar.css'

const menuItems = [
    { icon: '/invoice.png', label: 'Invoices' },
    { icon: '/customers.png', label: 'Customers' },
    { icon: '/business.png', label: 'My Business' },
    { icon: '/journal.png', label: 'Invoice Journal' },
    { icon: '/price-tag.png', label: 'Price List' },
    { icon: '/multiple-invoices.png', label: 'Multiple Invoicing' },
    { icon: '/unpaid.png', label: 'Unpaid Invoices' },
    { icon: '/offer.png', label: 'Offer' },
    { icon: '/inventory.png', label: 'Inventory Control' },
    { icon: '/multiple-invoices.png', label: 'Member Invoicing' },
    { icon: '/export.png', label: 'Import/Export' },
    { icon: '/logout.png', label: 'Logout' },
];


const Sidebar = ({isActive, setIsActive}) => {

    const sidebarRef = useRef(null);

     useEffect(() => {
    function handleOutsideClick(e) {
      if (isActive && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsActive(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isActive]);

    return (
        <aside ref={sidebarRef} className="sidebar">
            <div className="sidebar-header">
                <p>Menu</p>
                <hr />
            </div>

            <ul className="sidebar-list">
                {menuItems.map((item, index) => (
                    <li key={index} className="sidebar-item">
                        <img src={item.icon} className="sidebar-icon" />
                        <span>{item.label}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar